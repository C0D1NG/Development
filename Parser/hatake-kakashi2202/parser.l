%{
    #include<stdio.h>
    #include<string.h>
    #define TSIZE 128

    int len=0;
    char t[50][50];
    void prod_add(char* text);
    char* value;
    int table[100][TSIZE];
    char terminal[TSIZE];
    char nonterminal[26];
    struct product {
        char str[100];
        int len;
    }pro[20];
    int no_pro;
    char first[26][TSIZE];
    char follow[26][TSIZE];
    char first_rhs[100][TSIZE];
    char true_final_prod[25][50];
    char final_prod[20][20];
    int s=0,f_p=0;
    int t_f_p = 0;
%}

%%

\%(.)* ; /*For removing comments*/
(\-\>+|(.)*) {prod_add(yytext);} /*for adding to 2d array*/

%%

int isNT(char c) {
	return c >= 'A' && c <= 'Z';
}

void readFromarray(char true_final_prod[25][50],int t_f_p) {
	int i;
	int j;
    int k=0;
	while (k<t_f_p) {
        char buffer[255]="";
		strcpy(buffer,true_final_prod[k]);
		j = 0;
		nonterminal[buffer[0] - 'A'] = 1;
		for (i = 0; i < strlen(buffer); ++i) {
			if (buffer[i] == '|') {
				++no_pro;
				pro[no_pro - 1].str[j] = '\0';
				pro[no_pro - 1].len = j;
				pro[no_pro].str[0] = pro[no_pro - 1].str[0];
				pro[no_pro].str[1] = pro[no_pro - 1].str[1];
				pro[no_pro].str[2] = pro[no_pro - 1].str[2];
				j = 3;
			}
			else {
				pro[no_pro].str[j] = buffer[i];
				++j;
				if (!isNT(buffer[i]) && buffer[i] != '-' && buffer[i] != '>') {
					terminal[buffer[i]] = 1;
				}
			}
		}
		pro[no_pro].len = j;
		++no_pro;k++;
	}

}

void add_FIRST_A_to_FOLLOW_B(char A, char B) {
	int i;
	for (i = 0; i < TSIZE; ++i) {
		if (i != '^')
			follow[B - 'A'][i] = follow[B - 'A'][i] || first[A - 'A'][i];
	}
}

void add_FOLLOW_A_to_FOLLOW_B(char A, char B) {
	int i;
	for (i = 0; i < TSIZE; ++i) {
		if (i != '^')
			follow[B - 'A'][i] = follow[B - 'A'][i] || follow[A - 'A'][i];
	}
}

int yywrap() 
{ 
}
void FOLLOW() {

	int t = 0;
	int i, j, k, x;
	while (t++ < no_pro) {
		for (k = 0; k < 26; ++k) {
			if (!nonterminal[k])	continue;
			char nt = k + 'A';
			for (i = 0; i < no_pro; ++i) {
				for (j = 3; j < pro[i].len; ++j) {
					if (nt == pro[i].str[j]) {
						for (x = j + 1; x < pro[i].len; ++x) {
							char sc = pro[i].str[x];
							if (isNT(sc)) {
								add_FIRST_A_to_FOLLOW_B(sc, nt);
								if (first[sc - 'A']['^'])
									continue;
							}
							else {
								follow[nt - 'A'][sc] = 1;
							}
							break;
						}
						if (x == pro[i].len)
							add_FOLLOW_A_to_FOLLOW_B(pro[i].str[0], nt);
					}
				}
			}
		}
	}
}

void add_FIRST_A_to_FIRST_B(char A, char B) {
	int i;
	for (i = 0; i < TSIZE; ++i) {
		if (i != '^') {
			first[B - 'A'][i] = first[A - 'A'][i] || first[B - 'A'][i];
		}
	}
}

void FIRST() {
	int i, j;
	int t = 0;
	while (t < no_pro) {
		for (i = 0; i < no_pro; ++i) {
			for (j = 3; j < pro[i].len; ++j) {
				char sc = pro[i].str[j];
				if (isNT(sc)) {
					add_FIRST_A_to_FIRST_B(sc, pro[i].str[0]);
					if (first[sc - 'A']['^'])
						continue;
				}
				else {
					first[pro[i].str[0] - 'A'][sc] = 1;
				}
				break;
			}
			if (j == pro[i].len)
				first[pro[i].str[0] - 'A']['^'] = 1;
		}
		++t;
	}

}

void add_FIRST_A_to_FIRST_RHS__B(char A, int B) {
	int i;
	for (i = 0; i < TSIZE; ++i) {
		if (i != '^')
			first_rhs[B][i] = first[A - 'A'][i] || first_rhs[B][i];
	}
}

// Calculates FIRST(ß) for each A->ß
void FIRST_RHS() {
	int i, j;
	int t = 0;
	while (t < no_pro) {
		for (i = 0; i < no_pro; ++i) {
			for (j = 3; j < pro[i].len; ++j) {
				char sc = pro[i].str[j];
				if (isNT(sc)) {
					add_FIRST_A_to_FIRST_RHS__B(sc, i);
					if (first[sc - 'A']['^'])
						continue;
				}
				else {
					first_rhs[i][sc] = 1;
				}
				break;
			}
			if (j == pro[i].len)
				first_rhs[i]['^'] = 1;
		}
		++t;
	}

}
void left_recursion()
{
    int count=len;
    for(int loop=0;loop<count;loop++)
    {
        char input[100]="",l,r[50]="",temp[10]="",productions[25][50];
        int i=0,j=0,flag=0,consumed=0,t_t=0;
        l = t[loop][0];
        int rp = 0;
        for(int k=3;k<=strlen(t[loop])-1;k++){
            r[rp++] = t[loop][k];
        }
        r[rp]='\0';
        while(sscanf(r+consumed,"%[^|]s",temp) == 1 && consumed <= strlen(r))  {
            if(temp[0] != l)  {
                sprintf(productions[i++],"%c->%s%c",l,temp,78+s);
            }
            else if(temp[0]==l)
            {
                flag = 1;
                sprintf(productions[i++],"%c->%s%c",78+s,temp+1,78+s);
                t_t++;
            }
            consumed += strlen(temp)+1;
        }
        if(flag == 1)  {
            sprintf(productions[i++],"%c->^",78+s);
            char temp1[20];
            strcpy(temp1,productions[t_t]);
            strcpy(productions[t_t],productions[i-1]);
            strcpy(productions[i-1],temp1);
            // for(j=0;j<i;j++)
            //     printf("%s\n",productions[j]);
            // printf("\n");
        }
        else
        {
            sprintf(final_prod[f_p++],"%c->%s",l,r);
            continue;
        }
        
        int k=0;
        j=0;
        while(j<i)
        {
            strcpy(temp,productions[j]);
            if(temp[0]==78+s)
            {
                k++;
            }
            else
            {
                break;
            }
            j++;
        }
        // printf("%d\n",k);

        //For old
        char tmp1[20]="";
        int t=0;
        for(int m=k;m<i;m++)
        {
            for(int n=0;n<47;n++)
            {
                if(productions[m][3+n]>=33 && productions[m][3+n]<=126)
                {
                    tmp1[t++]= productions[m][3+n];
                }
                else
                {
                    if(m<i-1)
                        tmp1[t++]=124;
                    break;
                }
            }
        }
        sprintf(final_prod[f_p++],"%c->%s",l,tmp1);

        //For new
        char tmp[20]="";
        t=0;
        for(int m=0;m<k;m++)
        {
            for(int n=0;n<47;n++)
            {
                if(productions[m][3+n]>=33 && productions[m][3+n]<=126)
                {
                    tmp[t++]= productions[m][3+n];
                }
                else
                {
                    if(m<k-1)
                        tmp[t++]=124;
                    break;
                }
            }
        }
        sprintf(final_prod[f_p++],"%c->%s",78+s,tmp);
        s++;
    }
}
void left_factoring()
{
for(int m=0;m<f_p;m++)
    {
        char gram[20]="",part1[20]="",part2[20]="",modifiedGram[20]="",newGram[20]="",part3[20]="";  
        int i,j=0,k=0,left,pos,count=0;
        sscanf(final_prod[m],"%c->%s",&left,gram);
        for(i=0;i<20;i++)
        {
            if(gram[i]=='|')
            {
                count+=1;
            }
        }
        if(count==1)
        {
            for(i=0;gram[i]!='|';i++,j++)  
                part1[j]=gram[i];
            for(j=++i,i=0;gram[j]!='\0';j++,i++)  
                part2[i]=gram[j];
            if(part2[0]!='^')
            {
                for(i=0;i<strlen(part1)||i<strlen(part2);i++)  
                {  
                    if(part1[i]==part2[i])  
                    {  
                        modifiedGram[k]=part1[i];  
                        k++;  
                        pos=i+1;  
                    }
                    else
                    {
                        break;
                    } 
                }
                if(k>0)
                {
                    for(i=pos,j=0;part1[i]!='\0';i++,j++){  
                        newGram[j]=part1[i];  
                    }
                    if(newGram[0]==0)
                    {
                        newGram[0]='^';
                        j++;
                    }
                    newGram[j++]='|';  
                    for(i=pos;part2[i]!='\0';i++,j++){  
                        newGram[j]=part2[i];  
                    }
                    if(newGram[j-1]=='|')
                        newGram[j++]='^';
                    modifiedGram[k]=78+s;  
                    modifiedGram[++k]='\0';  
                    newGram[j]='\0';
                    sprintf(true_final_prod[t_f_p++],"%c->%s",left,modifiedGram);
                    sprintf(true_final_prod[t_f_p++],"%c->%s",78+s,newGram);
                    s++;
                }
                else
                {
                    sprintf(true_final_prod[t_f_p++],"%c->%s",left,gram);
                }
            }
            else
            {
                sprintf(true_final_prod[t_f_p++],"%c->%s",left,gram);
            }    
        }

        else if(count==2)
        {
            for(i=0;gram[i]!='|';i++,j++)  
                part1[j]=gram[i];
            for(j=++i,i=0;gram[j]!='|';j++,i++)  
                part2[i]=gram[j];
            for(i=++j,j=0;gram[i]!='\0';i++,j++)
                part3[j] = gram[i];
            if(part2[0]!='^')
            {
                for(i=0;i<strlen(part1)||i<strlen(part2);i++)  
                {  
                    if(part1[i]==part2[i])  
                    {  
                        modifiedGram[k]=part1[i];  
                        k++;  
                        pos=i+1;  
                    }
                    else
                    {
                        break;
                    }
                    
                }
                if(k>0){
                    for(i=pos,j=0;part1[i]!='\0';i++,j++){  
                        newGram[j]=part1[i];  
                    }
                    printf("hello\n");
                    if(newGram[0]==0)
                    {
                        newGram[0]='^';
                        j++;
                    }
                    newGram[j++]='|';
                    for(i=pos;part2[i]!='\0';i++,j++){  
                        newGram[j]=part2[i];  
                    }
                    if(newGram[j-1]=='|')
                        newGram[j++]='^';
                    modifiedGram[k++]=78+s;
                    if(strlen(part3)!=3){
                        modifiedGram[k++]='|';
                        for(i=0;i<strlen(part3);i++){
                            modifiedGram[k] = part3[i];
                            k++;
                        }
                    }  
                    modifiedGram[++k]='\0';  
                    newGram[j]='\0';  
                    sprintf(true_final_prod[t_f_p++],"%c->%s",left,modifiedGram);
                    sprintf(true_final_prod[t_f_p++],"%c->%s",78+s,newGram);
                    s++;
                }
                else
                {
                    sprintf(true_final_prod[t_f_p++],"%c->%s",left,gram);
                }
            }
            else
            {
                sprintf(true_final_prod[t_f_p++],"%c->%s",left,gram);
            }   
        }
        else
        {
            sprintf(true_final_prod[t_f_p++],"%c->%s",left,gram);
        }
    }

    printf("\t\tProduction After removal of Left Resursion and factoring\n\n");
    for(int i=0;i<t_f_p;i++)
    {
        printf("%s\n",true_final_prod[i]);
    }

}
void prod_add(char* text)
{
    strcpy(t[len++],text);
}
int main() 
{ 
    // lex for file reading
    extern FILE *yyin;
    yyin = fopen("input.txt", "r");
    yylex(); 
    for(int i=0;i<len;i++){
        char* string = t[i];
        int k = 0;
        while(string[k]!='\0'){
            if(string[k] == ' '){
                int l = k;
                while(string[l]!='\0'){
                    string[l]=string[l+1];
                    l++;
                }
            }
            k++;
        }
    }

    // left recursion
    left_recursion();

    //Left factoring
    left_factoring();
    

    readFromarray(true_final_prod,t_f_p);

	follow[pro[0].str[0] - 'A']['$'] = 1;

	FIRST();
	FOLLOW();
	FIRST_RHS();
	int i, j, k;

    printf("\n\t\tFirst\n\n");
	for (i = 0; i < no_pro; ++i) {
		if (i == 0 || (pro[i - 1].str[0] != pro[i].str[0])) {
			char c = pro[i].str[0];
			printf("FIRST OF %c: ", c);
			for (j = 0; j < TSIZE; ++j) {
				if (first[c - 'A'][j]) {
					printf("%c ", j);
				}
			}
			printf("\n");
		}
	}

    printf("\n\t\tFollow\n\n");
	// display follow of each variable
	for (i = 0; i < no_pro; ++i) {
		if (i == 0 || (pro[i - 1].str[0] != pro[i].str[0])) {
			char c = pro[i].str[0];
			printf("FOLLOW OF %c: ", c);
			for (j = 0; j < TSIZE; ++j) {
				if (follow[c - 'A'][j]) {
					printf("%c ", j);
				}
			}
			printf("\n");
		}
	}

    printf("\n\t\tFirst of Production\n\n");
	for (i = 0; i < no_pro; ++i) {
		printf("FIRST OF %s: ", pro[i].str);
		for (j = 0; j < TSIZE; ++j) {
			if (first_rhs[i][j]) {
				printf("%c ", j);
			}
		}
		printf("\n");
	}

	// the parse table contains '$'
	// set terminal['$'] = 1
	// to include '$' in the parse table
	terminal['$'] = 1;

	// the parse table do not read '^'
	// as input
	// so we set terminal['^'] = 0
	// to remove '^' from terminals
	terminal['^'] = 0;

	// printing parse table
	printf("\n\t****** LL(1) PARSING TABLE *******\n");
	printf("\t--------------------------------------------------------\n");
	printf("%-10s", "");
	for (i = 0; i < TSIZE; ++i) {
		if (terminal[i])	printf("%-10c", i);
	}
	printf("\n");
	int p = 0;
	for (i = 0; i < no_pro; ++i) {
		if (i != 0 && (pro[i].str[0] != pro[i - 1].str[0]))
			p = p + 1;
		for (j = 0; j < TSIZE; ++j) {
			if (first_rhs[i][j] && j != '^') {
				table[p][j] = i + 1;
			}
			else if (first_rhs[i]['^']) {
				for (k = 0; k < TSIZE; ++k) {
					if (follow[pro[i].str[0] - 'A'][k]) {
						table[p][k] = i + 1;
					}
				}
			}
		}
	}

	k=0;
    int counter=0;
	for (i = 0; i < no_pro; ++i) {
		if (i == 0 || (pro[i - 1].str[0] != pro[i].str[0])) {
			printf("%-10c", pro[i].str[0]);
			for (j = 0; j < TSIZE; ++j) {
				if (table[k][j]) {
					printf("%-10s", pro[table[k][j]-1].str);
                    counter++;
                }
				else if (terminal[j]) {
					printf("%-10s", "");
				}
			}
			++k;
			printf("\n");
		}
	}
     printf("---------------QUESTION 5: CLASSIFYING WHETHER IT IS LL(1) OR NOT-----------------------\n");
    if(counter == no_pro)
        printf("Given production is in LL(1)\n");
    else
        printf("Given production is not in LL(1)\n");
    return 0;
}

package tictactoe;

public class Board {
    int [][]board=new int[3][3];
    public void initializeBoard(){
        for(int i=0;i<=2;i++)
            for(int j=0;j<=2;j++)
                board[i][j]=2;
    }
    public int getBoardValue(int i,int j){
        return(board[i][j]);
    }
    public void setBoardValue(int i,int j,int value){
        board[i][j]=value;
    }
    public int possibleWin(int player){
        if(player==1){
            for(int i=0;i<=2;i++){
                if(board[i][0]*board[i][1]*board[i][2]==18)
                    if(board[i][0]==2) return(i*3+1);
                    else if(board[i][1]==2) return(i*3+2);
                    else return(i*3+3);
            }
            for(int j=0;j<=2;j++){
                if(board[0][j]*board[1][j]*board[2][j]==18)
                    if(board[0][j]==2) return(1+j);
                    else if(board[1][j]==2) return(4+j);
                    else return(7+j);
            }
            if(board[0][0]*board[1][1]*board[2][2]==18)
                if(board[0][0]==2) return(1);
                else if(board[1][1]==2) return(5);
                else return(9);
            if(board[0][2]*board[1][1]*board[2][0]==18)
                if(board[0][2]==2) return(3);
                else if(board[1][1]==2) return(5);
                else return(7);
            
        }
        else{
            for(int i=0;i<=2;i++){
                if(board[i][0]*board[i][1]*board[i][2]==50)
                    if(board[i][0]==2) return(i*3+1);
                    else if(board[i][1]==2) return(i*3+2);
                    else return(i*3+3);
            }
            for(int j=0;j<=2;j++){
                if(board[0][j]*board[1][j]*board[2][j]==50)
                    if(board[0][j]==2) return(1+j);
                    else if(board[1][j]==2) return(4+j);
                    else return(7+j);
            }
            if(board[0][0]*board[1][1]*board[2][2]==50)
                if(board[0][0]==2) return(1);
                else if(board[1][1]==2) return(5);
                else return(9);
            if(board[0][2]*board[1][1]*board[2][0]==50)
                if(board[0][2]==2) return(3);
                else if(board[1][1]==2) return(5);
                else return(7);
        }
        return(0);
    }
    public boolean checkWin(int player){
        if(player==1){
            for(int i=0;i<=2;i++)
                if(board[i][0]*board[i][1]*board[i][2]==27) return(true);
            for(int j=0;j<=2;j++)
                if(board[0][j]*board[1][j]*board[2][j]==27) return(true);
            if(board[0][0]*board[1][1]*board[2][2]==27) return(true);
            if(board[0][2]*board[1][1]*board[2][0]==27) return(true);
        }
        else{
           for(int i=0;i<=2;i++)
                if(board[i][0]*board[i][1]*board[i][2]==125) return(true);
            for(int j=0;j<=2;j++)
                if(board[0][j]*board[1][j]*board[2][j]==125) return(true);
            if(board[0][0]*board[1][1]*board[2][2]==125) return(true);
            if(board[0][2]*board[1][1]*board[2][0]==125) return(true);
        }
        return(false);
    }        
    public boolean isBoardFilled(){
        for(int i=0;i<=2;i++)
            for(int j=0;j<=2;j++)
                if(board[i][j]==2)
                    return(false);
        return(true);
    }
    public int randomBlankButton(){
        int count=0,s=0;
        for(int i=0;i<=2;i++)
            for(int j=0;j<=2;j++)
                if(board[i][j]==2)
                    count++;
        int r=1+(int)(Math.random()*count);
        for(int i=0;i<=2;i++)
            for(int j=0;j<=2;j++){
                if(board[i][j]==2)
                    s++;
                if(r==s){
                    if(i==0&&j==0) return(1);
                    if(i==0&&j==1) return(2);
                    if(i==0&&j==2) return(3);
                    if(i==1&&j==0) return(4);
                    if(i==1&&j==1) return(5);
                    if(i==1&&j==2) return(6);
                    if(i==2&&j==0) return(7);
                    if(i==2&&j==1) return(8);
                    if(i==2&&j==2) return(9);
                    
                }
            }
        return(0);
    }
            
}

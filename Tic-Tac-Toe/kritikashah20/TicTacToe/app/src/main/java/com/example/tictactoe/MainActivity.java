package com.example.tictactoe;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import java.util.logging.XMLFormatter;

public class MainActivity extends AppCompatActivity {

        boolean gameActive = true;
        //  Player Representation
        //  0 - X
        //  1 - O
        int activeplayer = 0;
        int[] gameState = {2,2,2,2,2,2,2,2,2};
        //  State meanings
        //  0 - X
        //  1 - O
        //  2 - Null
        int[][] winPositions = {{0,1,2} , {3,4,5} , {6,7,8} ,
                                {0,3,6} , {1,4,7} , {2,5,8} ,
                                {0,4,8} , {2,4,6}};

    public void playerTap(View view){

        ImageView img = (ImageView)view;
        int tappedImage = Integer.parseInt(img.getTag().toString());
        if(!gameActive){
            gameReset(view);
        }
        if(gameState[tappedImage] == 2) {
            gameState[tappedImage] = activeplayer;
            img.setTranslationY(-1000f);
            if (activeplayer == 0) {
                img.setImageResource(R.drawable.image2);
                activeplayer = 1;
                TextView status = findViewById(R.id.status);
                status.setText("Seren's Turn - Tap to play");
            } else {
                img.setImageResource(R.drawable.image3);
                activeplayer = 0;
                TextView status = findViewById(R.id.status);
                status.setText("Aaron's Turn - Tap to play");
            }
            img.animate().translationYBy(1000f).setDuration(300);
        }
        // check if any player has won
        for(int[] winPosition: winPositions){
            if(gameState[winPosition[0]] == gameState[winPosition[1]] &&
                    gameState[winPosition[1]] == gameState[winPosition[2]] &&
                    gameState[winPosition[0]]!=2){
                // somebody has won! - find out who?
                String winnerStr;
                gameActive = false;
                if(gameState[winPosition[0]]  == 0){
                    winnerStr = "Aaron has won";
                }
                else{
                    winnerStr = "Seren has won";
                }
                // Update the status bar for winner announcement
                TextView status = findViewById(R.id.status);
                status.setText(winnerStr);

            }
        }
    }

    public void gameReset(View view){
        gameActive = true;
        activeplayer = 0;
        for(int i=0; i<gameState.length; i++){
            gameState[i] = 2;
        }
        ((ImageView)findViewById(R.id.imageView11)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView2)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView4)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView5)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView6)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView7)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView8)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView9)).setImageResource(0);
        ((ImageView)findViewById(R.id.imageView10)).setImageResource(0);

        TextView status = findViewById(R.id.status);
        status.setText("Aaron's Turn - Tap to play");

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toast toast = Toast.makeText(getApplicationContext(), "2 Players - Aaron and Seren" , Toast.LENGTH_LONG);
        toast.setGravity(Gravity.TOP, 0 , 600);
        toast.show();

    }
}

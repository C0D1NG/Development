
package tictactoe;

import javax.swing.*;


public class Game extends javax.swing.JFrame 
{
    private int player=1;

     private Board board;

     private JButton [][]button=new JButton[3][3];

     protected void setButtonReferences()

     {

     	button[0][0]=jButton1;

        button[0][1]=jButton2;

        button[0][2]=jButton3;

        button[1][0]=jButton4;

        button[1][1]=jButton5;

        button[1][2]=jButton6;

        button[2][0]=jButton7;

        button[2][1]=jButton8;

        button[2][2]=jButton9;
    
 }
    
     public Game() 
     {

        initComponents();

     }
    
     public void setPlayer(int value)
	{

        player=value;
  
	  }

    public void refreshBoardDisplay()
	{
       for(int i=0;i<=2;i++)

           for(int j=0;j<=2;j++)
	{
  
             switch(board.getBoardValue(i, j))
		{
  
                 case 2:
   
                    button[i][j].setEnabled(true);
   
                    button[i][j].setText("");
  
                     break;

                   case 3:
    
                   button[i][j].setEnabled(false);
  
                     button[i][j].setText("X");

                       break;
                  
 			case 5:

                       button[i][j].setEnabled(false);
   
                    button[i][j].setText("O");
 
                      break;
  
             }
     
      }

    }
private void initComponents()
 {
       jButton1 = new javax.swing.JButton();
    
    jButton2 = new javax.swing.JButton();
 
       jButton3 = new javax.swing.JButton();
    
    jButton4 = new javax.swing.JButton();
   
     jButton5 = new javax.swing.JButton();
       
 jButton6 = new javax.swing.JButton();

        jButton7 = new javax.swing.JButton();
   
     jButton8 = new javax.swing.JButton();
  
      jButton9 = new javax.swing.JButton();

   
     setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
  
      setTitle("Tic Tac Toe");
  
      setPreferredSize(new java.awt.Dimension(350, 400));
  
      setResizable(false);

 
       jButton1.setFont(new java.awt.Font("Tahoma", 0, 24)); 
// NOI18N
  
      jButton1.addActionListener(new java.awt.event.ActionListener() 
{
            public void actionPerformed(java.awt.event.ActionEvent evt) 
{
                jButton1ActionPerformed(evt);
     
       }

        });


        jButton2.setFont(new java.awt.Font("Tahoma", 0, 24));
 // NOI18N
        jButton2.addActionListener(new java.awt.event.ActionListener() 
{
            public void actionPerformed(java.awt.event.ActionEvent evt)
 {
                jButton2ActionPerformed(evt);
      
      }
 
       });

 
       jButton3.setFont(new java.awt.Font("Tahoma", 0, 24)); 
// NOI18N
        jButton3.addActionListener(new java.awt.event.ActionListener() 
{
            public void actionPerformed(java.awt.event.ActionEvent evt) 
{
                jButton3ActionPerformed(evt);
   
         }
 
       });

  
      jButton4.setFont(new java.awt.Font("Tahoma", 0, 24)); 
// NOI18N
    
    jButton4.addActionListener(new java.awt.event.ActionListener()
 {
            public void actionPerformed(java.awt.event.ActionEvent evt) 
{
                jButton4ActionPerformed(evt);
    
        }

        });

 
       jButton5.setFont(new java.awt.Font("Tahoma", 0, 24));
 // NOI18N
     
   jButton5.addActionListener(new java.awt.event.ActionListener()
 {
      
      public void actionPerformed(java.awt.event.ActionEvent evt) 
{
                jButton5ActionPerformed(evt);
   
         }
 
       });

 
       jButton6.setFont(new java.awt.Font("Tahoma", 0, 24)); 
// NOI18N
    
    jButton6.addActionListener(new java.awt.event.ActionListener()
 {
       
     public void actionPerformed(java.awt.event.ActionEvent evt) 
{
                jButton6ActionPerformed(evt);
  
          }

        });


        jButton7.setFont(new java.awt.Font("Tahoma", 0, 24)); 
// NOI18N
 
       jButton7.addActionListener(new java.awt.event.ActionListener()
 {
    
        public void actionPerformed(java.awt.event.ActionEvent evt)
 {
             
   jButton7ActionPerformed(evt);
    
        }
 
       });

 
       jButton8.setFont(new java.awt.Font("Tahoma", 0, 24));
 // NOI18N
   
     jButton8.addActionListener(new java.awt.event.ActionListener()
 {
        
    public void actionPerformed(java.awt.event.ActionEvent evt)
 {
       
         jButton8ActionPerformed(evt);
 
           }

        });

  
      jButton9.setFont(new java.awt.Font("Tahoma", 0, 24)); 
// NOI18N
 
       jButton9.addActionListener(new java.awt.event.ActionListener() 
{
            
public void actionPerformed(java.awt.event.ActionEvent evt)
 {
        
        jButton9ActionPerformed(evt);
    
        }
 
       });

  
      javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
     
   getContentPane().setLayout(layout);
 
       layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton2, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton3, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jButton4, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton5, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton6, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jButton7, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton8, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton9, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addContainerGap(78, Short.MAX_VALUE))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(21, 21, 21)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jButton3, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton2, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jButton4, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton5, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton6, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jButton7, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton8, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jButton9, javax.swing.GroupLayout.PREFERRED_SIZE, 100, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addContainerGap(180, Short.MAX_VALUE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        if(player==1){
            board.setBoardValue(0,0,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(0,0,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
            
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
      if(player==1){
            board.setBoardValue(0,1,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();

                refreshBoardDisplay();

                setPlayer(1);
   
         }
            
else if(board.isBoardFilled())
{

                JOptionPane.showMessageDialog(this,"Game Draw");
    
            board.initializeBoard();
     
           refreshBoardDisplay();
        
        setPlayer(1);
  
          }
  
          else
{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(0,1,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
        if(player==1){
            board.setBoardValue(0,2,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(0,2,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton4ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton4ActionPerformed
        if(player==1){
            board.setBoardValue(1,0,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(1,0,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton4ActionPerformed

    private void jButton5ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton5ActionPerformed
       if(player==1){
            board.setBoardValue(1,1,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(1,1,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton5ActionPerformed

    private void jButton6ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton6ActionPerformed
        if(player==1){
            board.setBoardValue(1,2,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(1,2,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton6ActionPerformed

    private void jButton7ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton7ActionPerformed
        if(player==1){
            board.setBoardValue(2,0,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(2,0,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton7ActionPerformed

    private void jButton8ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton8ActionPerformed
        if(player==1){
            board.setBoardValue(2,1,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(2,1,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton8ActionPerformed

    private void jButton9ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton9ActionPerformed
        if(player==1){
            board.setBoardValue(2,2,3);
            this.refreshBoardDisplay();
            if(board.checkWin(1)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
                
                
        }
        else{//player==2
             board.setBoardValue(2,2,5);
            this.refreshBoardDisplay();
            if(board.checkWin(2)){
                JOptionPane.showMessageDialog(this,"Congrats!!,You Win");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
                playComputer();
            }
        }
    }//GEN-LAST:event_jButton9ActionPerformed

    
    public void playComputer(){
        int buttonNumber;
        //1. buttonNumber=possibleWin(player)
             buttonNumber=board.possibleWin(player);
             
        //2. buttonNumber=possibleWin(3-player)
             if(buttonNumber==0)
                 buttonNumber=board.possibleWin(3-player);
        //3. buttonNumber=randomBlankButton()
             if(buttonNumber==0)
                 buttonNumber=board.randomBlankButton();
        //   play move
       
        if(buttonNumber!=0){
            switch(buttonNumber){
                case 1:
                    if(player==1)
                        board.setBoardValue(0,0,3 );
                    else
                        board.setBoardValue(0,0,5 );
                    this.refreshBoardDisplay();
                    break;
                case 2:
                    if(player==1)
                        board.setBoardValue(0,1, 3);
                    else
                        board.setBoardValue(0,1, 5);
                    this.refreshBoardDisplay();
                    break;
                case 3:
                    if(player==1)
                        board.setBoardValue(0,2,3);
                    else
                        board.setBoardValue(0,2,5 );
                    this.refreshBoardDisplay();
                    break;
                case 4:
                    if(player==1)
                        board.setBoardValue(1,0,3);
                    else
                        board.setBoardValue(1,0,5 );
                    this.refreshBoardDisplay();
                    break;
                case 5:
                    if(player==1)
                        board.setBoardValue(1,1,3);
                    else
                        board.setBoardValue(1,1,5 );
                    this.refreshBoardDisplay();
                    break;
                case 6:
                    if(player==1)
                        board.setBoardValue(1,2,3);
                    else
                        board.setBoardValue(1,2,5 );
                    this.refreshBoardDisplay();
                    break;
                case 7:
                    if(player==1)
                        board.setBoardValue(2,0, 3);
                    else
                        board.setBoardValue(2,0,5 );
                    this.refreshBoardDisplay();
                    break;
                case 8:
                    if(player==1)
                        board.setBoardValue(2,1, 3);
                    else
                        board.setBoardValue(2,1,5 );
                    this.refreshBoardDisplay();
                    break;
                case 9:
                    if(player==1)
                        board.setBoardValue(2,2,3);
                    else
                        board.setBoardValue(2,2,5 );
                    this.refreshBoardDisplay();
                    break;
            }
            if(board.checkWin(player)){
                JOptionPane.showMessageDialog(this,"Computer won the game");
                board.initializeBoard();
                this.refreshBoardDisplay();
                setPlayer(1);
            }
            else if(board.isBoardFilled()){
                JOptionPane.showMessageDialog(this,"Game Draw");
                board.initializeBoard();
                this.refreshBoardDisplay();
                setPlayer(1);
            }
            else{
                setPlayer(3-player);
            }
                
        }
            
        
    }
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(Game.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(Game.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(Game.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(Game.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                Game game=new Game();
                game.setButtonReferences();
                game.setVisible(true);
                game.board=new Board();
                game.board.initializeBoard();
                game.setPlayer(1);
                game.refreshBoardDisplay();
                
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JButton jButton4;
    private javax.swing.JButton jButton5;
    private javax.swing.JButton jButton6;
    private javax.swing.JButton jButton7;
    private javax.swing.JButton jButton8;
    private javax.swing.JButton jButton9;
    // End of variables declaration//GEN-END:variables
}

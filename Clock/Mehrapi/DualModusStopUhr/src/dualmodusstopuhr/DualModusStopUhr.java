/*
DualModusStopUhr.java
 */
package dualmodusstopuhr;

import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.text.*;

public class DualModusStopUhr extends JFrame {
    JLabel laufZeitLabel = new JLabel();
    JTextField laufZeitTextField = new JTextField();
    JLabel gesamtzeitLabel = new JLabel();
    JTextField gesamtzeitTextField = new JTextField();
    JButton startStopButton = new JButton();
    JButton resetButton = new JButton();
    JButton beendenButton = new JButton();
    JButton pauseWeiterButton = new JButton();
    
    Timer displayTimer;
    
    long startZeit;
    long pauseZeit;
    long gestopptZeit;
    long halteZeit;
    
    
    public static void main(String[] args) {
        
        new DualModusStopUhr().show();
    }
    public DualModusStopUhr()
    {
        setTitle("DualModus StopUhr");
        setResizable(false);
        addWindowListener(new WindowAdapter()
    {
        public void windowClosing(WindowEvent evt)
        {
            exitForm(evt);
        }
    });
    
        getContentPane().setLayout(new GridBagLayout());
        GridBagConstraints gridPlatz;
        getContentPane().setBackground(new Color(255, 255, 153));
    
    laufZeitLabel.setText("Running Time:");
    laufZeitLabel.setFont(new Font("Arial", Font.PLAIN, 14));
    gridPlatz = new GridBagConstraints();
    gridPlatz.gridx = 0;
    gridPlatz.gridy = 0;
    gridPlatz.insets = new Insets(10, 25, 0, 0);
    getContentPane().add(laufZeitLabel, gridPlatz);
    
    laufZeitTextField.setPreferredSize(new Dimension(150, 50));
    laufZeitTextField.setEditable(false);
    laufZeitTextField.setBackground(Color.WHITE);
    laufZeitTextField.setForeground(Color.BLUE);
    laufZeitTextField.setText("00:00:00");
    
    laufZeitTextField.setHorizontalAlignment(SwingConstants.CENTER);
    laufZeitTextField.setFont(new Font("Arial", Font.BOLD, 24));
    gridPlatz= new GridBagConstraints();
    gridPlatz.gridx = 0;
    gridPlatz.gridy = 1;
    gridPlatz.gridwidth = 2;
    gridPlatz.insets = new Insets(0, 10, 0, 10);
    getContentPane().add(laufZeitTextField, gridPlatz);
    
    gesamtzeitLabel.setText(" Total Time:");
    gesamtzeitLabel.setFont(new Font("Arial", Font.PLAIN, 14));
    gridPlatz = new GridBagConstraints();
    gridPlatz.gridx = 0;
    gridPlatz.gridy = 2;
    gridPlatz.insets = new Insets(15, 25, 0, 0);
    getContentPane().add(gesamtzeitLabel, gridPlatz);
    
    gesamtzeitTextField.setPreferredSize(new Dimension(150, 50));
    gesamtzeitTextField.setEditable(false);
    gesamtzeitTextField.setBackground(Color.WHITE);
    gesamtzeitTextField.setForeground(Color.RED);
    gesamtzeitTextField.setText("00:00:00");
    
    gesamtzeitTextField.setHorizontalAlignment(SwingConstants.CENTER);
    gesamtzeitTextField.setFont(new Font("Arial", Font.BOLD, 24));
    gridPlatz = new GridBagConstraints();
    gridPlatz.gridx = 0;
    gridPlatz.gridy = 3;
    gridPlatz.gridwidth = 2;
    gridPlatz.insets = new Insets(0, 10, 15, 10);
    getContentPane().add(gesamtzeitTextField, gridPlatz);
    
    startStopButton.setText("Start");
    startStopButton.setBackground(new Color(255, 204, 51));
    gridPlatz = new GridBagConstraints();
    gridPlatz.gridx = 0;
    gridPlatz.gridy = 4;
    getContentPane().add(startStopButton, gridPlatz);
    startStopButton.addActionListener(new ActionListener()
    {
        public void actionPerformed(ActionEvent e)
        {
            startStopButtonActionPerformed(e);
        }
    });
    
    pauseWeiterButton.setText(" Pause");
    pauseWeiterButton.setBackground(new Color(255, 204, 51));
    gridPlatz = new GridBagConstraints();
    gridPlatz.gridx = 1;
    gridPlatz.gridy = 4;
    gridPlatz.insets = new Insets(10, 0, 10, 30);
    getContentPane().add(pauseWeiterButton, gridPlatz);
    pauseWeiterButton.addActionListener(new ActionListener()
    {
        public void actionPerformed(ActionEvent e)
        {
            pauseWeiterButtonActionPerformed(e);
        }
    });
    
    resetButton.setText("Reset");
    resetButton.setEnabled(false);
    resetButton.setBackground(new Color(255, 204, 51));
    gridPlatz = new GridBagConstraints();
    gridPlatz.gridx = 1;
    gridPlatz.gridy = 5;
    gridPlatz.insets = new Insets(0, 0, 20, 30);
    getContentPane().add(resetButton, gridPlatz);
    resetButton.addActionListener(new ActionListener()
    {
        public void actionPerformed(ActionEvent e)
        {
            resetButtonActionPerformed(e);  
        }
    });
    
   
     beendenButton.setText("Exit");
     beendenButton.setBackground(new Color(255, 204, 51));
     gridPlatz = new GridBagConstraints();
     gridPlatz.gridx = 0;
     gridPlatz.gridy = 5;
     gridPlatz.insets = new Insets(0, 15, 20, 15);
     getContentPane().add(beendenButton, gridPlatz);
     beendenButton.addActionListener(new ActionListener()
     {
         public void actionPerformed(ActionEvent e)
         {
             exitButtonActionPerformed(e);
         }
     });
         
   displayTimer = new Timer(1000, new ActionListener()
   {
       public void actionPerformed(ActionEvent e)
       {
           displayTimerActionPerformed(e);
       }
   }); 
   
     pack();
    
     // Mit diesem Quelletext wird das Fenster MittenBildschirm gezeigt
    Dimension screenSize = Toolkit.getDefaultToolkit().getScreenSize();
    setBounds((int) (0.5*(screenSize.width - getWidth())), (int)(0.5*(screenSize.height - getHeight())),
    getWidth(), getHeight());
   
}
        

  private void exitForm(WindowEvent evt)
        {
            System.exit(0);
        }
  
  private void startStopButtonActionPerformed(ActionEvent e)
     {
        if (startStopButton.getText().equals("Start"))
        {
  
         startZeit = System.currentTimeMillis();
         halteZeit = 0;
         startStopButton.setText("Stop");
         beendenButton.setEnabled(false);
         displayTimer.start();
     }
        
        else if(startStopButton.getText().equals("Stop"))
        {
      
            halteZeit = System.currentTimeMillis();
            resetButton.setEnabled(true);
            beendenButton.setEnabled(true);
            displayTimer.stop();  
        }
        }
  
     private void pauseWeiterButtonActionPerformed(ActionEvent e)
     {
          if (pauseWeiterButton.getText().equals(" Pause"))
        { 
         halteZeit = System.currentTimeMillis();
         pauseWeiterButton.setText("Weiter");
         beendenButton.setEnabled(true);
         displayTimer.stop();
     }
        
        else if (pauseWeiterButton.getText().equals("Weiter"))
        {
            gestopptZeit += System.currentTimeMillis() - halteZeit;
            pauseWeiterButton.setText("Pause");
            resetButton.setEnabled(false);
            beendenButton.setEnabled(false);
            displayTimer.start();
        }
        
     }
     
     private void resetButtonActionPerformed(ActionEvent e)
     {
         // Zurück am Anfang
         laufZeitTextField.setText("00:00:00");
         gesamtzeitTextField.setText("00:00:00");
         startStopButton.setText("Start");
         resetButton.setEnabled(false);
     }
     
     private void exitButtonActionPerformed(ActionEvent e)
     {
         System.exit(0);
     }

     
     private void displayTimerActionPerformed(ActionEvent e)
     {
         long aktuelleZeit;
         
         // Lauf- und Gesamtzeit bestimmen
         aktuelleZeit = System.currentTimeMillis();
         
         //Zeit rechnen
         laufZeitTextField.setText(HMS(aktuelleZeit - startZeit - gestopptZeit));
         gesamtzeitTextField.setText(HMS(aktuelleZeit - startZeit));
     }
        
     private String HMS(long tms)
     {
         int h;
         int m;
         int s;
         double t;
         t = tms / 1000.0;
         
         // Break time down into hours, minutes, and seconds
         
         h= (int) (t / 3600);
         m = (int) ((t-h*3600) / 60);
         s = (int) (t-h*3600-m*60);
         
         //Format time as string
         return(new DecimalFormat("00").format(h) + ":" + new
        DecimalFormat("00").format(m) +":" + new DecimalFormat("00").format(s) );
     }
}



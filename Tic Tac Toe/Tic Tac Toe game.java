import java.awt.*; //graphic
import java.awt.event.*; //click

class Fdemo extends Frame implements ActionListener {  

    Button b[] = new Button[9];

    int k = 0, x = 8, y = 28; //x,y -> pixel
    Button b1; //Global restart button
    int a = 0; // O & X
    int z = 0, z1 = 0, z2 = 0, z3 = 0, z4 = 0, z5 = 0, z6 = 0, z7 = 0, z8 = 0; //Buttons 0 state

    Label statusLabel; //which player msg
    boolean gameEnded = false; //game state

    // Winning states
    int[][] winCombinations = {
            {0, 1, 2}, {3, 4, 5}, {6, 7, 8},
            {0, 3, 6}, {1, 4, 7}, {2, 5, 8},
            {0, 4, 8}, {2, 4, 6}
    };

    Fdemo() {
        setLayout(null); // no need for pre-defined layout
        setVisible(true); //visible frame
        setSize(800, 600); //(x,y)
        setLocation(400, 100); //coordinated the frames
        setBackground(Color.darkGray); //dots
        setForeground(Color.lightGray);
        //-----------------------------
        b1 = new Button("Restart");
        b1.setSize(100, 40);
        b1.setLocation(350, 400);
        b1.setBackground(Color.gray);
        b1.setForeground(Color.cyan);
        b1.addActionListener(this);
        add(b1);
        //-----------------------------
        statusLabel = new Label("Player O's turn.");
        statusLabel.setBounds(300, 350, 200, 30);
        statusLabel.setFont(new Font("Dialog", Font.BOLD, 25));
        statusLabel.setForeground(Color.white);
        add(statusLabel);
        //----------------------------
        boolean gameEnded = false;
        //-----------------------------
        for (int i = 1; i <= 3; i++) {   //1 row
            for (int j = 1; j <= 3; j++) {  //2 row
                b[k] = new Button();
                b[k].setSize(100, 100);  //Button size
                b[k].setLocation(x, y);
                b[k].setFont(new Font("", Font.BOLD, 40));
                add(b[k]); //add button
                //-------------------------
                b[k].addActionListener(this);
                b[k].setBackground(Color.pink);
                b[k].setForeground(new Color(0,128,128));
                k++;
                x += 100;
            }
            x = 8;
            y += 100;
            /*[0][1][2]     ← y = 28
              [3][4][5]     ← y = 128
              [6][7][8]     ← y = 228  */
        }
    }

    public void actionPerformed(ActionEvent e) { //abstrace methode
        if (e.getSource() == b1) { //restart button click
            for (int i = 0; i <= 8; i++) {
                b[i].setLabel("");
            }
            gameEnded = false;
            a = 0;  //restart players turn
            statusLabel.setText("Player O's turn.");
            return;
        }
        if (gameEnded) return; 
        
        for (int i = 0; i <= 8; i++) {
            if (e.getSource() == b[i]) {
                if (b[i].getLabel().isEmpty()) {
                    b[i].setLabel(a % 2 == 0 ? "O" : "X");
                    if (checkWin()) {
                        statusLabel.setText("Player " + (a % 2 == 0 ? "O" : "X") + " won <:");
                        gameEnded = true; //stop taking inputs
                        return;
                    }
                    a++;
                    statusLabel.setText("Player " + (a % 2 == 0 ? "O" : "X") + "'s turn.");
                }
            }
        }
    }

    //game logic
    private boolean checkWin() {
        for (int[] combo : winCombinations) {
            String s1 = b[combo[0]].getLabel(); //getting buttons label
            String s2 = b[combo[1]].getLabel();
            String s3 = b[combo[2]].getLabel();
            if (!s1.isEmpty() && s1.equals(s2) && s2.equals(s3)) {
                return true;
            }
        }
        return false;
    }

}
public class Main {
    public static void main(String[] args) {
        Fdemo f = new Fdemo();
    }
}

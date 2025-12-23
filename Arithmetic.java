import java.util.Scanner;

public class Arithmetic {
    public static void main(String[] args) {

        int a, b;
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter first number: ");
        a = sc.nextInt();

        System.out.print("Enter second number: ");
        b = sc.nextInt();

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));

        System.out.println("Divison: "+ (a / b));
    }
    
}

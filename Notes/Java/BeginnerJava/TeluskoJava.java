import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

@SuppressWarnings("unused")
public class TeluskoJava {
    public static void main(String a[]) {
        // Ternary Operator

        // int n = 15;
        // String s = n%2 == 0 ? "even" : "odd";
        // System.out.println(s);

        // Switch Statement

        int dayNo = 1;
        switch (dayNo) {
            case 1:
                // System.out.println("Monday");
                break;
            case 2:
                // System.out.println("Tuesday");
                break;
            case 3:
                // System.out.println("Wednesday");
                break;
            case 4:
                // System.out.println("Thursday");
                break;
            case 5:
                // System.out.println("Friday");
                break;
            case 6:
                // System.out.println("Saturday");
                break;
            case 7:
                // System.out.println("Sunday");
                break;
            default:
                // System.out.println("Enter a valid number");
                break;
        }

        // While loop

        int i = 1;
        while (i <= 3) {
            // System.out.println(i);
            i++;
        }

        // Do-while loop

        int j = 5;
        do {
            // System.out.println(j);
        } while (j <= 4);

        // For loop

        for (int k = 1; k < 4; k++) {
            // System.out.println(k);
        }

        // Calling classes

        // int num1 = 4;
        // int num2 = 7;
        // Calculator calc = new Calculator();
        // System.out.println(calc.num);
        // System.out.println(calc.add(num1, num2));

        // Arrays

        // int[] arr1 = new int[5];
        // int[] arr2 = new int[]{1,2,3,4,5,6};
        // int[] arr3 = {1,2,3,4,5,6};
        // System.out.println(arr3[3]);
        // 2D Array
        int[][] nums = new int[4][5];
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 5; j++) {
                nums[i][j] = (int) (Math.random() * 10);
                // System.out.print(nums[i][j] + " ");
            }
            // System.out.println();
        }
        // System.out.println("printing Array elements by using enhanced for loop:");
        // for (int k[] : nums){
        // for(int m : k){
        // System.out.print(m + " ");
        // }
        // System.out.println();
        // }
        // Jagged Array
        int[][] jagged = new int[3][];
        jagged[0] = new int[3];
        jagged[1] = new int[4];
        jagged[2] = new int[2];
        for (i = 0; i < jagged.length; i++) {
            for (j = 0; j < jagged[i].length; j++) {
                jagged[i][j] = (int) (Math.random() * 10);
            }
        }
        // System.out.println("printing JaggedArray elements by using enhanced for
        // loop:");
        // for (int[] l : jagged){
        // for(int o : l){
        // System.out.print(o + " ");
        // }
        // System.out.println();
        // }

        // Array of Objects
        Student s1 = new Student();
        s1.roll = 1;
        s1.name = "Ram";
        s1.marks = 88;

        Student s2 = new Student();
        s2.roll = 2;
        s2.name = "Shyam";
        s2.marks = 80;

        Student s3 = new Student();
        s3.roll = 3;
        s3.name = "Ghyam";
        s3.marks = 97;

        Student[] students = new Student[3];
        students[0] = s1;
        students[1] = s2;
        students[2] = s3;

        for (i = 0; i < students.length; i++) {
            // System.out.println(students[i].roll + " : " + students[i].name + " : " +
            // students[i].marks);
        }

        // For-each loop

        // for (Student student : students){
        // System.out.println(student.name);
        // }

        // StringBuffer

        // StringBuffer sb = new StringBuffer("Biswadip");
        // System.out.println(sb.capacity()); // default is 16 and on passing values it
        // consumes required space + 16
        // System.out.println(sb.length());
        // System.out.println(sb.append(" Saha"));
        // String str = sb.toString();

        // Static

        // Static variables
        Mobile.type = "Smartphone";

        Mobile phone1 = new Mobile();
        phone1.name = "Samsung";
        phone1.price = 1000;

        Mobile phone2 = new Mobile();
        phone2.name = "Apple";
        phone2.price = 1100;

        // phone1.show();
        // phone2.show();
        // Mobile.showAgain(phone1);

        // Encapsulation

        Human hum1 = new Human();
        hum1.setName("Biswadip");
        hum1.setAge(18);
        // System.out.println(hum1.getName() + " : " + hum1.getAge());

        // Inheritance

        // this and super methods

        // B objB1 = new B();
        // B objB2 = new B(5);
        // B objB3 = new B(5, 6);

        // final - variable, method, class

        // final int finalNum = 8;

        // Dynamic Method Dispatch

        // C objC1 = new D(); // refrence of super class and object of sub-class
        // objC1.show1();

        // Upcasting and Downcasting

        // C objC2 = new D();
        // objC1.show1();

        // D objD1 = (D) objC2;
        // objD1.show2();

        // Abstract

        // BMW objCar = new BMW();
        // objCar.playMusic();
        // objCar.drive();

        // Inner Class

        // OuterClass outerObj = new OuterClass();
        // outerObj.show();

        // OuterClass.InnerClass innerObj = outerObj.new InnerClass();
        // innerObj.show();

        // Anonymous Class

        // OuterClass anonymous = new OuterClass(){
        // public void show(){
        // System.out.println("In new Show");
        // }
        // };
        // anonymous.show();

        // Interfaces

        // E interfaceObj;
        // interfaceObj = new F();
        // interfaceObj.show();
        // interfaceObj.config();
        // System.out.println(E.area + E.age);

        // Enum

        Status status = Status.Running;
        // System.out.println(status);
        // System.out.println(status.ordinal());

        if (status == Status.Running) {
            // System.out.println("Running..");
        } else if (status == Status.Pending) {
            // System.out.println("Pending..");
        } else if (status == Status.Failed) {
            // System.out.println("Failed..");
        } else if (status == Status.Success) {
            // System.out.println("Success..");
        }

        switch (status) {
            case Running:
                // System.out.println("Running..");
                break;
            case Pending:
                // System.out.println("Pending..");
                break;
            case Failed:
                // System.out.println("Failed..");
                break;
            case Success:
                // System.out.println("Success..");
                break;
        }

        // Laptop lap = Laptop.Macbook;
        // System.out.println(lap + " : " + lap.getPrice());

        // Annotations
        // @Override, @Deprecated, @FunctionalInteface

        // Lambda Expressions

        // G lambdaObj1 = (lambdaNum) -> {
        // System.out.println("in new show" + lambdaNum);
        // };
        // lambdaObj1.show(5);

        // H lambdaObj2 = (num1, num2) -> {
        // return num1 + num2;
        // };
        // System.out.println(lambdaObj2.add(2, 5));

        // Exceptional Handling

        int num4 = 20;
        int num5 = 0;
        // int[] numbers = new int[5];

        try {
            num5 = 18 / num4;
            if (num5 == 0)
                throw new ArithmeticException("I don't want to print zero");
            // System.out.println(numbers[5]);
        } catch (ArithmeticException e) {
            num5 = 18 / 1;
            // System.out.println("Thats the Default output. " + e);
        } catch (ArrayIndexOutOfBoundsException e) {
            // System.out.println("Array out of bound exception");
        } catch (Exception e) {
            // System.out.println("Something went wrong");
        }

        // System.out.println(num5);
        // System.out.println("Done");

        // User Input

        // System.out.println("Enter a number");
        // int enteredNum = 0;
        // try {
        // enteredNum = System.in.read();
        // } catch (IOException e) {
        // System.out.println("IO exception");
        // }
        // System.out.println(enteredNum);

        InputStreamReader in = new InputStreamReader(System.in);
        BufferedReader bf = new BufferedReader(in);
        int enteredBufferNum = 0;
        try {
            // enteredBufferNum = Integer.parseInt(bf.readLine());
        } catch (NumberFormatException e) {
        }
        // catch (IOException e) {}
        finally {
            try {
                bf.close();
            } catch (IOException e) {
            }
        }
        // System.out.println(enteredBufferNum);

        try (Scanner sc = new Scanner(System.in)) {
            // int scannerNum = sc.nextInt();
            // System.out.println(scannerNum);
        }

        // Try with Finally and Resources

        try {
        } finally {
        }

        try (BufferedReader br = new BufferedReader(new InputStreamReader(System.in))) {
            num5 = Integer.parseInt(br.readLine());
            System.out.println(num5);
        } catch (Exception e) {
        }

        // Collection Interface

        // ArrayList
        List<Integer> numArrayList = new ArrayList<Integer>();
        numArrayList.add(6);
        numArrayList.add(8);
        numArrayList.add(7);
        numArrayList.add(7);
        // System.out.println(numArrayList);
        // System.out.println(numArrayList.get(2));

        // Set
        Set<Integer> numSet = new HashSet<Integer>();
        numSet.add(6);
        numSet.add(8);
        numSet.add(7);
        numSet.add(7);
        // System.out.println(numSet);
        // TreeSet supports sorted set while HashSet don't

        // Map
        Map<String, Integer> studentsMap = new HashMap<>();
        studentsMap.put("Navin", 50);
        studentsMap.put("Me", 40);
        studentsMap.put("Kiran", 20);
        // System.out.println(studentsMap);
        for (String key : studentsMap.keySet()) {
            // System.out.println(key + " : " + studentsMap.get(key));
        }
    }
}

// OOP
// Object - Properties and Behaviours

class Calculator {
    int num = 5; // instance variable

    public int add(int num1, int num2) {
        int r = num1 + num2;
        return r;
    }

    public double add(double num1, double num2) {
        double r = num1 + num2;
        return r;
    }

    public int add(int num1, int num2, int num3) {
        return num1 + num2 + num3;
    } // Method Overloading
}

class Student {
    int roll;
    String name;
    int marks;
}

class Mobile {
    String name;
    int price;
    static String type;

    static {
        type = "Smartphone";
        // System.out.println("In static");
    }

    public Mobile() {
        name = "";
        price = 0;
        // System.out.println("In constructor");
    }

    public void show() {
        // System.out.println(name + " : " + price + " : " + type);
    }

    public static void showAgain(Mobile phone) {
        // System.out.println(phone.name + " : " + phone.price + " : " + type);
    }
}

class Human {
    private String name;
    private int age;

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

// Every class in java extends to Object class if you don't define super class,
// Syntax : class A extends Object
class A {
    public A() {
        super(); // calling Object() constructor
        System.out.println("in A");
    }

    public A(int n) {
        super(); // calling Object() constructor
        System.out.println("in A int");
    }
}

class B extends A {
    public B() {
        super(); // calling A() constructor
        System.out.println("in B");
    }

    public B(int n) {
        super(n); // calling A(n) constructor
        System.out.println("in B int");
    }

    public B(int n, int m) {
        this(); // calling B() constructor
        System.out.println("in B int, int");
    }
}

class C {
    public void show1() {
        System.out.println("in C show");
    }
}

class D extends C {
    public void show2() {
        System.out.println("in D show");
    }
}

abstract class Car {
    public abstract void drive();

    public void playMusic() {
        System.out.println("PLay Music");
    }
}

class BMW extends Car {
    public void drive() {
        System.out.println("Driving ...");
    }
}

class OuterClass {
    public void show() {
        System.out.println("Inside Outer Class");
    }

    class InnerClass {
        public void show() {
            System.out.println("Inside Inner Class");
        }
    }
}

interface E {
    int age = 20; // by default variables are final and static
    String area = "Mumbai";

    void show(); // by default they are public and default

    void config();
}

class F implements E {
    public void show() {
        System.out.println("In F show");
    }

    public void config() {
        System.out.println("In F config");
    }
}

enum Status {
    Success, Pending, Failed, Running;
}

enum Laptop {
    Macbook(2000), XPS(2200), Surface(1600), ThinkPad;

    private int price;

    private Laptop() {
    }

    private Laptop(int price) {
        this.price = price;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

}

@FunctionalInterface
interface G {
    void show(int lambdaNum);
}

@FunctionalInterface
interface H {
    int add(int num1, int num2);
}

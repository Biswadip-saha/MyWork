# Pointers

-   Code can't access HEAP, for that pointer is required. In simple words pointers are used for accessing HEAP, accessing "Resources", and parameter passing.

-   Size of pointer is independent of its data type.

```C
int a = 10; // data variable
int *p; // pointer to integer variable
p = &a; //-> p stores the memory address of a, and *p points toward the value stored at the memory address at 'a'
```

### Pointer to Array

```C
#include <stdio.h>
#include <stdlib.h>

int main(){
    // pointer to array
    int A[5] = {2,4,6,8,10};
    int *p;
    p = A;

    // dynamically allocating space in HEAP
    int *a;
    a = (int*) malloc(sizeof(int) * 5) //-> malloc returns void pointer, therefore it is needed to typecast to integer pointer
    a[0] = 10; a[1] = 20; a[2] = 30; a[3] = 40; a[4] = 50;
    free(a);

    return 0;
}
```

### Pointer to Structure

```C
#include <stdio.h>
#include <stdlib.h>

struct Rectangle{
    int length;
    int breadth;
}

int main(){
    struct Rectangle r = {10,5};
    struct Rectangle *p = &r;

    // ways to access the members of a structure
    (*p).length = 20;
    p -> length = 20;

    // dynamically allocating space in HEAP
    struct Rectangle *a;
    a = (struct Rectangle *) malloc(sizeof(struct Rectangle));
    a -> length = 10;
    a -> breadth = 5;

    return 0;
}
```

# Functions

### Pass By Value

```C
void swap(int x, int y){
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main(){
    int a, b;
    a = 10;
    b = 20;
    swap(a, b);
    printf("%d %d", a, b);

    return 0;
}
```

### Pass By address

```C
void swap(int *x, int *y){
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

int main(){
    int a, b;
    a = 10;
    b = 20;
    swap(&a, &b);
    printf("%d %d", a, b);

    return 0;
}
```

### Pass By refrence

_Works in C++ only_

```C++
void swap(int &x, int &y){
    int temp;
    temp = x;
    x = y;
    y = temp;
}

int main(){
    int a, b;
    a = 10;
    b = 20;
    swap(a, b);
    printf("%d %d", a, b);

    return 0;
}
```

### Array as parameter

-   Array can only be passed by address
-   Ways to pass array as parameter :
    -   int A[ ] in formal parameter - it means pointer to array only
    -   int \*A in formal parameter - it means pointer to integer which can point to an array of integer too

```C
void fun(int A[], int n){
    int i;
    for(i=0; i<n; i++) printf("%d", A[i]);
}

int main(){
    int A[] = {2,4,6,8,10};
    fun(A,5);

    return 0;
}
```

#### Returning Array from a function

```C
int* fun(int n){
    int *p;
    p = (int*) malloc(n * sizeof(int));
    return(p);
}

int main(){
    int *A;
    A = fun(5);

    return 0;
}
```

### Structure as parameter

```C
struct Rectangle{
    int length;
    int breadth;
}

// Pass by value
void changeLengthByValue(struct Rectangle r1){
    r1.length++;
}

// Pass by refrence for C++
void changeLengthByRefrence(struct Rectangle &r2){
    r2.length++;
}

// Pass by address
void changeLengthByAddress(struct Rectangle *p, int l){
    p -> length = l;
}

int main(){
    struct Rectangle r = {10,5};

    changeLengthByValue(r);
    printf("%d", r.length); //10

    changeLengthByRefrence(r); //for C++
    printf("%d", r.length); //11

    changeLengthByAddress(&r, ++(r.length));
    printf("%d", r.length); //12

    return 0;
}
```

#### Returning structure from function

```C
struct Rectangle{
    int length;
    int breadth;
}

struct Rectangle *fun(){
    struct Rectangle *p;
    p = (struct Rectangle *) malloc(sizeof(struct Rectangle));
    p -> length = 15;
    p -> breadth = 7;

    return p;
}

int main(){
    struct Rectangle *ptr = fun();

    return 0;
}
```

# Bitwise Operations

## Left Shift

H = 0
<br>
H = H << 1

-   All bits in the memory is shifted to the left by the stated number, and the remaining vacant spaces is filled with 0

## Bits ORing

```C
a = 10 -> 1 0 1 0
b =  6 -> 0 1 1 0
-----------------
a | b  -> 1 1 1 0 = 14

refrence:
a | b
1 | 1 = 1
1 | 0 = 1
0 | 1 = 1
0 | 0 = 0
```

### Merging:

-   Merging is used to setting a particular bit to ON

```C
H -> 0 0 0 1 0 0 0 0
a -> 0 0 0 0 0 0 0 0

a = 1      : a -> 0 0 0 0 0 0 0 1
a = a << 2 : a -> 0 0 0 0 0 1 0 0
H = a | H  : H -> 0 0 0 1 0 1 0 0
```

## Bits ANDing

```C
a = 10 -> 1 0 1 0
b =  6 -> 0 1 1 0
-----------------
a & b  -> 0 0 1 0 = 2

refrence:
a & b
1 & 1 = 1
1 & 0 = 0
0 & 1 = 0
0 & 0 = 0
```

### Masking:

-   Masking is used to determine a particular bit is ON or not, if it returns 0 then NO, otherwise YES

```C
H -> 0 0 0 1 0 0 0 0
a -> 0 0 0 0 0 0 0 0

a = 1      : a -> 0 0 0 0 0 0 0 1
a = a << 4 : a -> 0 0 0 1 0 0 0 0
a & H -> True
```

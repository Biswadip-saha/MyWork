# Array Representation

- Collection of similar data elements grouped under one name.
- Supports only homogeneous data type.
- Stores data in contiguous memory location.
- int A[5];

## Ways to declaration and initialise array

- int A[5]; *: initialise array with garbage values;*
- int A[5] = {2, 4, 6, 8, 10}; *: initialise array with the mentioned values;*
- int A[5] = {2, 4}; *: initialise 1st 2 values with the mentioned values;*
- int A[5] = {0}; *: initialise the full array with the mentioned values;*
- int A[ ] = {2, 4, 6, 8, 10}; *: initialise the array with as much required size needed for the required values;*

## Ways to access array elements

- printf("%d", A[2]);
- printf("%d", 2[A]);
- printf("%d", *(A+2));
- for(i=0; i<5; i++){
    printf( "%d", A[i]);
}

## Static array v/s Dynamic array

```C
void main(){
    int A[5]; // static array in stack because the size was defined at the compilation time

    int *p;
    p = (int*) malloc(5 * sizeof(int)); // dynamic allocation of array in heap

    // increase array size
    int *q;
    q = (int*) malloc(10 * sizeof(int));
    for(i=0; i<5; i++) q[i] = p[i];

    free(p);
    p = q;
    q = NULL;
}
```

## 2D arrays

- int A[3][4];
- int A[3][4] = {{2, 4, 6 ,8}, {3, 5, 7, 9}, {1, 2, 3, 4}};
- int *A[3]; // will form an array of integer pointers, which then in turn needs to be filled with the memory locations of the required arrays from heap
    - A[0] = (int*) malloc(4 * sizeof(int));
    - A[1] = (int*) malloc(4 * sizeof(int));
    - A[2] = (int*) malloc(4 * sizeof(int));
- int **A; // initializing 2D array completely in heap
    - A = (int**) malloc(3 * sizeof(int *));
    - A[0] = (int*) malloc(4 * sizeof(int));
    - A[1] = (int*) malloc(4 * sizeof(int));
    - A[2] = (int*) malloc(4 * sizeof(int));

### Row major formula for 2D arrays

- Let, array be A[m][n]
- Address(A[i][j]) = L0 + [i * n + j] * sizeof(datatype)

```C
void main(){
    int A[3][4] = {{a00, a01, a02, a03}, {a10, a11, a12, a13}, {a20, a21, a22, a23}};
    // let address of A[0][0] = 200
    // add(A[2][3]) = 200 + [2*4 + 3]*4 = 244
    // add(A[1][2]) = 200 + [1*4 + 2]*4 = 224
}
```

### Column major formula for 2D arrays

- Let, array be A[m][n]
- Address(A[i][j]) = L0 + [j * m + i] * sizeof(datatype)

```C
void main(){
    int A[3][4] = {{a00, a01, a02, a03}, {a10, a11, a12, a13}, {a20, a21, a22, a23}};
    // let address of A[0][0] = 200
    // add(A[1][3]) = 200 + [3*3 + 1]*4 = 240
    // add(A[1][2]) = 200 + [2*3 + 1]*4 = 228
}
```

### Row major & Column major formula for 4D Arrays

- Type A[d1][d2][d3][d4]
- Address(A[i1][i2][i3][i4])

#### Row Major -

L0 + [(i1 * d2 * d3 * d4) + (i2 * d3 * d4) + (i3 * d4) + i4] * w

#### Column Major -

L0 + [(i4 * d1 * d2 * d3) + (i3 * d1 * d2) + (i2 * d1) + i1] * w

### Row major & Column major formula for nD Arrays

- Array - A[m][n]

#### Row Major -

L0 + [(n∑p=1)(ip * (nΠq=p+1)(dq))] * w
- Time - O(n^2)

#### Column Major -

L0 + [(1∑p=n)(ip * (1Πq=p-1)(dq))] * w
- Time - O(n^2)
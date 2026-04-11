# Matrices

-   Special matrices are essentially square matrix, with great number of 0's

## Types

-   [Diagonal Matrix](#diagonal-matrix)
-   [Lower Triangular Matrix](#lower-triangular-matrix)

## Code

-   [Implementation](#implementation)
-   [Menu Driven Programme](#menu-driven-programme)

# Types

## Diagonal Matrix

-   For Diagonal Matrix, M[i, j] = 0 for i!=j
-   Since, most of the elements are 0, store the actual elements in a 1D array rather than 2D array

```C
Diagonal Matrix, M, of 5x5 with elements:

3, 0, 0, 0, 0
0, 7, 0, 0, 0
0, 0, 4, 0, 0
0, 0, 0, 9, 0
0, 0, 0, 0, 6

A = [3, 7, 4, 9, 6]

'for getting M[4, 4]: i == j, return A[4]
 for getting M[2, 2]: i == j, return A[2]
 for getting M[4, 3]: i != j, return 0

 for getting M[i, j]: if i != j, return 0
                      else i == j, return A[i]'

int A[5]; // matrix of 5x5

void set(int A[], int i, int j, int x){
    if(i == j) A[i-1] = x;
}

int get(int A[], int i, int j){
    if(i == j) return A[i-1];
    else return 0;
}
```

[`Code:`](#diagonal-matrix-1)

## Lower Triangular Matrix

-   Lower triangular part of the matrix is non zeroes
-   For Lower triangular matrix, M[i, j] = 0 if i < j
-   Non-zero elements for nxn matrix: 1 + 2 + 3 + ... + n = n(n+1)/2

### Row-Major Mapping

-   Store the elements of the matrix in a 1D array, row by row thus row major mapping

### Column-Major Mapping

-   Store the elements of the matrix in a 1D array, column by column thus column major mapping

```C
Lower Triangular Matrix, M, of 5x5 with elements:

a11, 0,   0,   0,   0
a21, a22, 0,   0,   0
a31, a32, a33, 0,   0
a41, a42, a43, a44, 0
a51, a52, a53, a54, a55

// Row-Major Mapping
A = [a11, a21, a22, a31, a32, a33, a41, a42, a43, a44, a51, a52, a53, a54, a55]

'for getting M[1, 1]: [0] + (1-1), return A[0]
 for getting M[3, 2]: [1 + 2] + (2-1), return A[4]
 for getting M[5, 5]: [1 + 2 + 3 + 4] + (5-1), return A[14]
 for getting M[3, 5]: 3 < 5, return 0
 
 for getting M[i, j]: if i < j, return 0
                      else return A[[sum upto i-1 terms] + j-1]'

// Column-Major Mapping
A = [a11, a21, a31, a41, a51, a22, a32, a42, a52, a33, a43, a53, a44, a54, a55]

'for getting M[4, 4]: [5 + 4 + 3] + (0), return A[12]
 for getting M[5, 4]: [5 + 4 + 3] + (1), return A[13]
 for getting M[5, 3]: [5 + 4] + (2), return A[11]
 for getting M[1, 3]: 1 < 3, return 0
 
 for getting M[i, j]: if i < j, return 0
                      else return A[[]]'

int A[15]; // matrix of 5x5, no. of non zero element = (5*6)/2 = 15

```

[`Code:`]()

# Code

## Implementation

### Initialisation

```C
#include <stdio.h>

struct Matrix{
    int A[10]; // length of 1D array
    int n; // dimension of matrix
}
```

### Diagonal Matrix

```C
void DiagonalSet(struct Matrix *m, int i, int j, int x){
    if(i == j) m->A[i-1] = x;
}

int DiagonalGet(struct Matrix m, int i, int j){
    if(i == j) return m.A[i-1];
    else return 0;
}

void DiagonalDisplay(struct Matrix m){
    int i, int j;
    for(i=0; i<m.n; i++){
        for(j=0; j<m.n; j++){
            if(i==j) printf("%d ", m.A[i-1]);
            else printf("0 ");
        }
        printf("\n");
    }
}
```

### Body

```C
int main(){
    struct Matrix m;
    m.n = 4;

    // Diagonal Matrix
    DiagonalSet(&m, 1, 1, 3); DiagonalSet(&m, 2, 2, 7); DiagonalSet(&m, 3, 3, 4); DiagonalSet(&m, 4, 4, 9);

    DiagonalDisplay(m);

    printf("%d\n", DiagonalGet(m, 2, 2));

    return 0;
}
```

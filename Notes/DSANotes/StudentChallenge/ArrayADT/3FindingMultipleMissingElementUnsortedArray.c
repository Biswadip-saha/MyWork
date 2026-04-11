// Find multiple missing element in an unsorted array

// Type 1: 3,7,4,9,12,6,1,11,2,10

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i, max;
    int A[10] = {3, 7, 4, 9, 12, 6, 1, 11, 2, 10};
    max = A[0];

    for (i = 1; i < 10; i++)
    {
        if (max < A[i])
        {
            max = A[i];
        }
    }

    int *B = (int *)malloc(max * sizeof(int));
    for (i = 0; i < max; i++)
    {
        B[i] = 0;
    }

    for (i = 0; i < 10; i++)
    {
        B[A[i] - 1] = 1;
    }

    for (i = 0; i < max; i++)
    {
        if (B[i] != 1)
            printf("The missing element is: %d\n", i + 1);
    }

    free(B);
    return 0;
}

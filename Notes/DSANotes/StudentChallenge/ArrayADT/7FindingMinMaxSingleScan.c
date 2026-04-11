// Find min and max in an array in a single scan

// Type 1: 5,8,3,9,6,2,10,7,-1,4

#include <stdio.h>

int main()
{
    int A[10] = {5, 8, 3, 9, 6, 2, 10, 7, -1, 4};
    int i, max = A[0], min = A[0];

    for (i = 1; i < 10; i++)
    {
        if (A[i] < min)
            min = A[i];
        else if (A[i] > max)
            max = A[i];
    }
    printf("%d is max and %d is min for the given array\n", max, min);

    return 0;
}
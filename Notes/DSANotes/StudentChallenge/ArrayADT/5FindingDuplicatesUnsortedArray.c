// Find duplicates and count them on the basis of the number of times they appear in an unsorted array

// Type 1: 8,3,6,4,6,5,6,8,2,7

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int A[10] = {8, 3, 6, 4, 6, 5, 6, 8, 2, 7};
    int i;

    // Way 1:
    int j, count = 1;
    for (i = 0; i < (10 - 1); i++)
    {
        if (A[i] != -1)
        {
            for (j = i + 1; j < 10; j++)
            {
                if (A[i] == A[j])
                {
                    A[j] = -1;
                    count++;
                }
            }
            if (count > 1)
            {
                printf("The number %d appears for %d times\n", A[i], count);
                count = 1;
            }
        }
    }

    // Way 2 (using Hashing):
    int max, min;
    max = A[0], min = A[0];

    for (i = 1; i < 10; i++)
        if (max < A[i])
            max = A[i];
    for (i = 1; i < 10; i++)
        if (min > A[i])
            min = A[i];

    int *B = (int *)malloc((max + 1) * sizeof(int));
    for (i = 0; i < (max + 1); i++)
        B[i] = 0;

    for (i = 0; i < 10; i++)
        B[A[i]]++;

    for (i = min; i < (max + 1); i++)
        if (B[i] > 1)
            printf("The number %d appears for %d times\n", i, B[i]);

    free(B);

    return 0;
}
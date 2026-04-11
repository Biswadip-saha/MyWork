// Find duplicates in a sorted array while counting them on the basis of how many times they appears

// Type 1: 3,6,8,8,10,12,15,15,15,20

#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Way 1:
    int i;
    int A[10] = {3, 6, 8, 8, 10, 12, 15, 15, 15, 20};

    int j;
    for (i = 0; i < 10 - 1; i++)
    {
        if (A[i] == A[i + 1])
        {
            j = i + 1;
            while (A[i] == A[j])
                j++;
            printf("The number %d appears for %d times\n", A[i], j - i);
            i = j - 1;
        }
    }

    // Way 2 (Using Hashing):
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

    /* My way:
    int count = 1;
    for (i = 0; i < 10 - 1; i++)
    {
        if (count - 1 != 0)
        {
            if (A[i] != A[i + 1])
            {
                printf("The number %d appears for %d times\n", A[i], count);
                count = 1;
                continue;
            }
            else
            {
                count++;
                continue;
            }
        }
        if (A[i] == A[i + 1])
            count++;
    } */

    return 0;
}

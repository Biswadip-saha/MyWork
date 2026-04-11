// Find a multiple missing element in an array

// Type 1: 6,7,8,9,11,12,15,16,17,19,20

#include <stdio.h>

int main()
{
    int i;

    int A[11] = {6, 7, 8, 9, 11, 12, 15, 16, 17, 19, 20};
    int difference = A[0];

    for (i = 0; i < 10; i++)
    {
        if ((A[i] - i) != difference)
        {
            for (difference; difference < A[i] - i; difference++)
            {
                printf("Missing No. is: %d\n", difference + i);
            }
        }
    }

    return 0;
}

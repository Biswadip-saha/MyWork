// Find a single missing element in an array of 2 various types

// Type 1: 1,2,3,4,5,6,8,9,10,11,12
// Type 2: 6,7,8,9,10,11,13,14,15,16,17

#include <stdio.h>

int main()
{
    int i;

    // Type 1:
    int A[11] = {1,2,3,4,5,6,8,9,10,11,12};
    int sumOfElements=0, EXPECTEDSUM;;
    for(i=0; i<11; i++){
        sumOfElements = sumOfElements + A[i];
    }
    EXPECTEDSUM = (12 * (12+1))/2;
    printf("Missing No. in type 1 is: %d\n", EXPECTEDSUM-sumOfElements);

    // Type 2:
    int B[11] = {6,7,8,9,10,11,13,14,15,16,17};
    int difference = B[0];
    
    for(i=0; i<10; i++){
        if((B[i] - i) != difference){
            printf("Missing No. in type 2 is: %d\n", B[i]-1);
            break;
        }
    }

    return 0;
}
# Array ADT (as Abstract Data Type)

## Data

-   [Array space](#array-space-size-length)
-   [Size](#array-space-size-length)
-   [Length (No. of elements)](#array-space-size-length)

## Operation

-   [Display(arr)](#displayarr)
-   [Add(x) / Append(x)](#addx--appendx)
-   [Insert(index, x)](#insertindex-x)
-   [Delete(index)](#deleteindex)
-   [Sorted?](#sorted)
-   [Merging](#merging)
-   [Get(index)](#getindex)
-   [Set(index, x)](#setindex)
-   [Max() / Min()](#max--min)
-   [Avg()](#avg)
-   [Reverse()](#reverse)
-   [Shift() / Rotate()](#shift--rotate)
-   [Sets Operation](#sets-operations)

## Searching

-   [Linear Search](#linear-searching)
-   [Binary Search](#binary-searching)

## Code

- [Implementation](#implementation)
- [Menu Driven Programme](#menu-driven-programme)

# Data

## Array Space, Size, Length

1. int A[10];
   <br>
   size = 10;
   <br>
   Length = 0;
2. int* A;
   <br>
   A = (int*) malloc(size \* sizeof(int)); // input size from user
   <br>
   Length = 0;

[`Code :`](#data-2)

# Operartions

## Display(arr)

```C
for(i=0; i<length; i++) printf("%d", A[i]);
```

[`Code :`](#display)

## Add(x) / Append(x)

```C
A[length] = x;
length++;
```

Time - O(1)

[`Code :`](#append)

## Insert(index, x)

```C
for(i=length; i>index; i--) A[i] = A[i-1];
A[index] = x;
length++;
```

Time - max: O(n), min: O(1)

[`Code :`](#insert)

## Delete(index)

```C
x = A[index];
for(i=index; i<length; i++){
    A[i] = A[i+1];
}
length--;
```

Time - max: O(n), min: O(1)

[`Code :`](#delete)

## Sorted?

### Check whether the array is sorted or not

```C
for(i=0; i<length-1; i++){
    if(A[i] > A[i+1]) return false;
}
return true;
```

### Inserting element in an sorted array

```C
i=length-1;
while(A[i]>x){
    A[i+1] = A[i];
    i--;
}
A[i+1] = x;
```

### -ve on left side

```C
i=0;
j=length-1;
while(i<j){
    while(A[i]<0){
        i++;
    }
    while(A[j]>=0){
        j--;
    }
    if(i<j){
        swap(A[i], A[j]);
    }
}
```

[`Code :`](#sorted-1)

## Merging

-   Can only be done on sorted arrays
-   Result is a sorted array

```C
int i=0, j=0, k=0;
while(i<m && j<n){
    if(A[i] < B[j]) C[k++] = A[i++];
    else C[k++] = B[j++];
}
for(;i<m;i++) C[k++] = A[i];
for(;j<n;j++) C[k++] = B[j];
```

[`Code :`](#merging-1)

## Get(index)

```C
if(index>=0 && index<length) return A[index];
```

Time - O(1)

[`Code :`](#get)

## Set(index)

```C
if(index>=0 && index<length) A[index] = x;
```

Time - O(1)

[`Code :`](#set)

## Max() / Min()

```C
max = A[0];
min = A[0];
for(i=1; i<length; i++){
    if(A[i]>max) max = A[i];
    if(A[i]<min) min = A[i];
}
return max/min;
```

Time - O(n)

[`Code :`](#maxmin)

## Avg()

```C
total = 0;
for(i=0; i<length; i++) total = total+A[i];
return total/n;
```

Time - O(n)

[`Code :`](#avg-1)

## Reverse()

Way 1: Reverse copy the original array

```C
for(i=length-1, j=0; i>=0; i--, j++){
    B[j] = A[i];
}
for(i=0; i<length; i++){
    A[i] = B[i];
}
```

Way 2: Scan the two ends of the array and interchange them

```C
for(i=0, j=length-1; i<j; i++, j--){
    swap(A[i], A[j]);
}
```

[`Code :`](#reverse-1)

## Shift() / Rotate()

### Left shift() / Rotate()

-   Shifting elements by one place to the left and deleting the index 0 element freeing up the length-1 element space // shifting
-   The deleted element is copied to the free space // rotating

```C
// int firstEle = A[0];
for(int i=0; i<length-1; i++){
    A[i] = A[i+1];
}
A[length-1] = 0;
// A[length-1] = firstEle;

// commented for rotation code
```

### Right shift() / Rotate()

-   Shifting elements by one place to the right and deleting the index[length-1] element freeing up the 0th index element space // shifting
-   The deleted element is copied to the free space // rotating

```C
// int lastEle = A[length-1];
for(int i=length-1; i>0; i--){
    A[i] = A[i-1];
}
A[length-1] = 0;
// A[0] = lastEle;

// commented for rotation code
```

## Sets operations

### Union

#### For unsorted arrays:

- Copy 1 array into the resultant array
- For every element in the 2nd array check whether it is in the resultant array
- If yes: move on, no: copy the element in the resultant array

#### For sorted arrays :

- Merge operation format but, if the element at i and j is same copy once in the resultant array and increase both i and j by 1

### Intersection

#### For unsorted arrays:

- Copy elements of 1 array into the resultant array only if the element is present in both arrays

#### For sorted arrays :

- Merge operation format but, if the element at i and j is same only then copy the element in the resultant array and increase both i and j by 1

### Difference

#### For unsorted arrays:

- Copy element of the required array into the resultant array only if the element is not present in the other array

#### For sorted arrays :

- Merge operation format but, if the element at i and j is same don't copy that element and increase both i and j by 1 and copy only the elements of the required array into the resultant array

### Sets Membership

- Search for the required element if it is present in the required array

[`Code :`](#sets-operations-1)

# Searching

## Linear Searching

-   Elements must be of unique set.
-   Search linearly by checking elements one by one.

```C
for(i=0; i<length; i++){
    if(key==A[i]) return i;
}
return -1;
```

1st element take 1 case
<br>
2nd element take 2 case
<br>
3rd element take 3 case
<br>
.
<br>
.
<br>
.
<br>
nth element take n case

Total cases required for searching n elements - 1+2+3+...+n
<br>
Avg time for 1 element - (1+2+3+...+n)/n = (n+1)/2 -> O(n)

Time - max: O(n), min: O(1), avg: O(n)

### Improving Linear Search

1. Transposition :
    - If an element is searched, there is a high possibility that, that element might be searched for again, for that move the element one position closer for reducing the number of searches needed to find that element.

```C
for(i=0; i<length; i++){
    if(key==A[i]) {
        swap(A[i], A[i-1]);
        return i-1;
    }
}
return -1;
```

2. Move to front/head:

```C
for(i=0; i<length; i++){
    if(key==A[i]) {
        swap(A[i], A[0]);
        return 0;
    }
}
return -1;
```

[`Code :`](#linear-search)

## Binary Searching

-   All elements must be sorted
-   Search in the middle of the array, if not found split the array in half and search in the middle of the half where the element belongs.
-   3 parameters required: l (low), h (high), key

```C
Way 1 (Iterative) :-
while(l<=h){
    mid = [(l+h)/2];
    if(key = A[mid]) return mid;
    else if(key<A[mid]) h = mid-1;
    else l = mid+1;
}
return -1;

Way 2 (Recursive) :-
if(l<=h){
    mid = [(l+h)/2];
    if(key = A[mid]) return mid;
    else if(key<A[mid]) return BinarySearch(l, mid-1, key);
    else return BinarySearch(mid+1, h, key);
}
return -1;
```

`log is of base 2`

1st level of middle element take 1 search =
<br>
2nd level of middle element take 2\*2 search
<br>
3rd level of middle element take 3\*4 search
<br>
4th level of middle element take 4\*8 search
<br>
.
<br>
.
<br>
.
<br>
ith level of middle element take i\*2^(i-1) search

Total searches required for searching n elements - 1\*2^0 + 2\*2^1 + 3\*2^2 + ... + i\*2^(i-1)
<br>
Avg time for 1 element - (1\*2^0+2\*2^1+3\*2^2+...+i\*2^(i-1))/n
<br>
= ((i=1Σlogn)i\*2^(i-1))/n
<br>
= (logn\*2^(logn))/n (approx)
<br>
= (logn\*n^(log2))/n
<br>
= logn
<br>

Time - Max: O(logn), Min: O(1), Avg: O(logn)

[`Code :`](#binary-search)

# Code

## Implementation

### Data

```C
#include <stdio.h>
#include <stdlib.h>

void swap(int *x, int *y){
    int temp;
    temp = *x;
    *x = *y;
    *y = temp;
}

struct Array{
    /* Array in HEAP
    int *A; */

    // Array in STACK
    int A[10];
    int size;
    int length;
}
```

### Display

```C
// Diplay function
void Display(struct Array arr){
    int i;
    printf("\nElements are:- \n");
    for(i=0; i<arr.length; i++) printf("%d ", arr.A[i]);
}
```

### Append

```C
// Append function
void Append(struct Array *arr, int x){
    if(arr->length < arr->size) arr->A[arr->length++] = x;
}
```

### Insert

```C
// Insert function
void Insert(struct Array *arr, int index, int x){
    int i;
    if(index>=0 && index<=arr->length){
        for(i=arr->length; i>index; i--) arr->A[i] = arr->A[i-1];
        arr->A[index] = x;
        arr->length++;
    }
}
```

### Delete

```C
// Delete function
int Delete(struct Array *arr, int index){
    int x = 0;
    if(index>=0 && index<arr->length){
        x = arr->A[index];
        for(i=index; i<arr->length-1; i++) arr->A[i]=arr->A[i+1];
        arr->length--;
        return x;
    }

    return 0;
}
```

### Sorted?

```C
// Sorted? function
    // Check if the array is sorted
    int isSorted(struct Array arr){
        int i;
        for(i=0; i<arr.length-1; i++){
            if(arr.A[i] > arr.A[i+1]) return 0;
        }
        return 1;
    }

    // Inserting element in an sorted array
    void InsertSort(struct Array *arr, int x){
        if(arr->length == arr->size) return;
        int i = arr->length-1;

        while(i>=0 && arr->A[i]>x){
            arr->A[i+1] = arr->A[i];
        }
        arr->A[i+1] = x;
    }

    // -ve on left side
    void Rearrange(struct Array *arr){
        int i = 0, j = arr->length-1;
        while(i<j){
            while(arr->A[i]>0) i++;
            while(arr->A[j]<=0) j--;
            if(i<j) swap(&arr->A[i], &arr->A[j]);
        }
    }
```

### Merging

```C
// Merging
struct Array* Merging(struct Array *arr1, struct Array *arr2){
    int i=0, j=0, k=0;
    struct Array *arr3 = (struct Array*)malloc(sizeof(struct Array));

    while(i<arr1->length && j<arr2->length){
        if(arr1->A[i] < arr2->A[j]) arr3->A[k++] = arr1->A[i++];
        else arr3->A[k++] = arr2->A[j++];
    }
    for(;i<arr1->length;i++) arr3->A[k++] = arr1->A[i];
    for(;j<arr2->length;j++) arr3->A[k++] = arr2->A[j];

    arr3->length = arr1->length + arr2->length;
    arr3->size = 10;

    return arr3;
}
```

### Get

```C
// Get function
int Get(struct Array arr, int index){
    if(index>=0 && index<arr.length) return arr.A[index];
    return -1;
}
```

### Set

```C
// set function
int Get(struct Array *arr, int index, int x){
    if(index>=0 && index<arr->length) arr->A[index] = x;
}
```

### Max/Min

```C
// Max function
int Max(struct Array arr){
    int max = arr.A[0];
    int i;
    for(i=1; i<arr.length; i++){
        if(arr.A[i]>max) max = arr.A[i];
    }
    return max;
}

// Min function
int Min(struct Array arr){
    int min = arr.A[0];
    int i;
    for(i=1; i<arr.length; i++){
        if(arr.A[i]<min) min = arr.A[i];
    }
    return min;
}
```

### Avg

```C
// Avg function
float Avg(struct Array arr){
    int s = 0, i;
    for(i=0; i<arr.length; i++) s+=arr.A[i];
    return (float) s/arr.length;
}
```

### Reverse

```C
// Reverse function
void Reverse(struct Array *arr){
    // Way 1: (Help of another array)
    int *arrB;
    int i, j;
    arrB = (int*)malloc(arr->length*sizeof(int));

    for(i=0, j=arr->length-1; j>=0; i++, j--){
        arrB[i] = arr->A[j];
    }
    for(i=0; i<arr->length; i++){
        arr->A[i] = arrB[i];
    }

    // Way 2: (Swaping elements)
    /* for(i=0, j=arr->length; i<j; i++){
        swap(&arr->A[i], &arr->A[j]);
    } */
}
```

### Sets Operations

```C
// Sets operations
    // Union
    struct Array *Union(struct Array *arr1, struct Array *arr2){
        int i, j, k;
        i = j = k = 0;

        struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));

        while (i < arr1->length && j < arr2->length){
            if (arr1->A[i] < arr2->A[j])
                arr3->A[k++] = arr1->A[i++];
            else if (arr2->A[j] < arr1->A[i])
                arr3->A[k++] = arr2->A[j++];
            else{
                arr3->A[k++] = arr1->A[i++];
                j++;
            }
        }
        for (; i < arr1->length; i++)
            arr3->A[k++] = arr1->A[i];
        for (; j < arr2->length; j++)
            arr3->A[k++] = arr2->A[j];

        arr3->length = k;
        arr3->size = 10;

        return arr3;
    }

    // Intersection
    struct Array *Intersection(struct Array *arr1, struct Array *arr2){
        int i, j, k;
        i = j = k = 0;

        struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));

        while (i < arr1->length && j < arr2->length){
            if (arr1->A[i] < arr2->A[j])
                i++;
            else if (arr2->A[j] < arr1->A[i])
                j++;
            else if (arr1->A[i] == arr2->A[j]){
                arr3->A[k++] = arr1->A[i++];
                j++;
            }
        }

        arr3->length = k;
        arr3->size = 10;

        return arr3;
    }

    // Difference
    struct Array *Difference(struct Array *arr1, struct Array *arr2){
        int i, j, k;
        i = j = k = 0;

        struct Array *arr3 = (struct Array *)malloc(sizeof(struct Array));

        while (i < arr1->length && j < arr2->length){
            if (arr1->A[i] < arr2->A[j])
                arr3->A[k++] = arr1->A[i++];
            else if (arr2->A[j] < arr1->A[i])
                j++;
            else{
                i++;
                j++;
            }
        }
        for (; i < arr1->length; i++)
            arr3->A[k++] = arr1->A[i];

        arr3->length = k;
        arr3->size = 10;

        return arr3;
    }
```

### Linear Search

```C
// Linear Search
int LinearSearch(struct Array *arr, int key){
    int i=0;
    for(i=0; i<arr->length; i++){
        if(key==arr->A[i]){
            // return i; Normal
            /* swap(&arr->A[i], &arr->A[0]); // Move to Head
            return 0; */
            swap(&arr->A[i], &arr->A[i-1]); // Transposition
            return i-1;
        }
        return -1;
    }
}
```

### Binary Search

```C
// Binary Search

    // Iterative
    int BinarySearch(struct Array arr, int key){
        int l, mid, h;
        l = 0;
        h = arr.length-1;

        while(l<=h){
            mid = [(l+h)/2];
            if(key == arr.A[mid]) return mid;
            else if(key<arr.A[mid]) h = mid-1;
            else l = mid+1;
        }
        return -1;
    }

    // Recursive
    /* int RecursiveBinarySearch(int a[], int l, int h, int key){
        int mid;
        if(l<=h){
            mid = (l+h)/2;
            if(key == a[mid]) return mid;
            else if(key<a[mid]) return RecursiveBinarySearch(a, l, mid-1, key);
            else return RecursiveBinarySearch(a, mid+1, h, key);
        }
        return -1;
    } */
```

### Body

```C
int main(){
    /* Initialise Array in HEAP
    struct Array arr;
    int n, i;

    printf("Enter size of an array:- ");
    scanf("%d", &arr.size);

    arr.A = (int*)malloc(arr.size * sizeof(int));
    arr.length = 0;

    printf("Enter number of numbers:- ");
    scanf("%d", &n);
    printf("Enter all the elements:- ");
    for(i=0; i<n; i++) scanf("%d", &arr.A[i]);
    arr.length = n; */

    // Initialise Array in STACK
    struct Array arr = {{2,3,4,5,6}, 10, 5};

    // Append operation
    Append(&arr, 10);

    // Insert operation
    Insert(&arr, 0, 10);

    // Delete operation
    printf("%d\n", Delete(&arr, 0));
    printf("%d\n", Delete(&arr, 5));

    // Sorted?
    printf("%d\n", isSorted(arr));

    // Merging
    struct Array arr2 = {{1,7,8,9}, 10, 4};
    struct Array *arr3;
    arr3 = Merging(&arr, &arr2);
    Display(*arr3);

    // Get operation
    printf("%d\n", Get(arr, 2));

    // Set operation
    Set(&arr, 0, 10);
    Set(&arr, 0, 2);

    // Max / Min operation
    printf("%d\n", Max(arr));
    printf("%d\n", Min(arr));

    // Avg operation
    printf("%f\n", Avg(arr));

    // Reverse operation
    Reverse(&arr);
    Reverse(&arr);

    // Linear Search
    printf("%d\n", LinearSearch(&arr, 4));

    // Binary Search
    printf("%d\n", BinarySearch(arr, 4));
    // printf("%d\n", RecursiveBinarySearch(arr.A, 0, arr.length, 4));

    // Display operation
    Display(arr);

    return 0;
}
```

## Menu Driven Programme

```C
#include <stdio.h>
#include <stdlib.h>
struct Array
{
    int *A;
    int size;
    int length;
};

void Display(struct Array arr)
{
    int i;
    printf("\nElements are\n");
    for (i = 0; i < arr.length; i++)
        printf("%d ", arr.A[i]);
}

void Insert(struct Array *arr, int index, int x)
{
    int i;
    if (index >= 0 && index <= arr->length)
    {
        for (i = arr->length; i > index; i--)
            arr->A[i] = arr->A[i - 1];
        arr->A[index] = x;
        arr->length++;
    }
}

int Delete(struct Array *arr, int index)
{
    int x = 0;
    int i;

    if (index >= 0 && index < arr->length)
    {
        x = arr->A[index];
        for (i = index; i < arr->length - 1; i++)
            arr->A[i] = arr->A[i + 1];
        arr->length--;
        return x;
    }

    return 0;
}

int LinearSearch(struct Array *arr, int key)
{
    int i;
    for (i = 0; i < arr->length; i++)
    {
        if (key == arr->A[i])
        {
            swap(&arr->A[i], &arr->A[0]);
            return i;
        }
    }
    return -1;
}

int Sum(struct Array arr)
{
    int s = 0;
    int i;
    for (i = 0; i < arr.length; i++)
        s += arr.A[i];

    return s;
}

int main()
{
    struct Array arr1;
    int ch;
    int x, index;

    printf("Enter Size of Array");
    scanf("%d", &arr1.size);
    arr1.A = (int *)malloc(arr1.size * sizeof(int));
    arr1.length = 0;
    do
    {
        printf("\n\nMenu\n");
        printf("1. Insert\n");
        printf("2. Delete\n");
        printf("3. Search\n");
        printf("4. Sum\n");
        printf("5. Display\n");
        printf("6. Exit\n");

        printf("enter you choice ");
        scanf("%d", &ch);

        switch (ch)
        {
            case 1:
                printf("Enter an element and index");
                scanf("%d%d", &x, &index);
                Insert(&arr1, index, x);
                break;
            case 2:
                printf("Enter index ");
                scanf("%d", &index);
                x = Delete(&arr1, index);
                printf("Deleted Element is %d\n", x);
                break;
            case 3:
                printf("Enter element to search ");
                scanf("%d", &x);
                index = LinearSearch(&arr1, x);
                printf("Element index %d", index);
                break;
            case 4:
                printf("Sum is %d\n", Sum(arr1));
                break;
            case 5:
                Display(arr1);
        }
    } while (ch < 6);
    return 0;
}
```

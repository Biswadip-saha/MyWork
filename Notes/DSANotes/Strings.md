# Strings

## Chracter set / ASCII codes

0 - 48, .... 9 - 57
<br>
A - 65, .... Z - 90
<br>
a - 97, .... z - 122

-   ASCII code ranges from 0 - 127, ie 7 bits are enough to represent an ASCII code, thus taking 1 byte of memory to represent them
-   Unicode takes 2 bytes, 16 bits, representing the characters in hexadecimal format

## Character Array or String

```C
char X[5];
char X[5] = {'A','B','C','D','E'};
char X[ ] = {'A','B','C','D','E'};
char X[ ] = {65, 66, 67, 68, 69};

// By adding a string delimiter at the end of the character array it becomes a string
// \0 is the delimiter of a string or null character

char name[10] = {'J','o','h','n', \0};
// -> InMemory: name = 'J','o','h','n', \0, 0, 0, 0, 0, 0
```

-   In recent compilers, defining a string using a pointer creates an immutable string, whereas defining a string using array notation creates a mutable string
-   Using pointer: `char *name = "Biswadip";`
-   Using array notation: `char name[] = "Biswadip";`

## Creating, Reading, Writing a string

```C
char name[10] = {'J','o','h','n', \0}; // Size: 10
char name[  ] = {'J','o','h','n', \0}; // Size: 5
char name[  ] = "John";

// for printing:
printf("%s", name);

// for creating:
scanf("%s", name); // can read only one word
gets(name); // reads words till you hit enter
```

## Functions upon string

### Length of a string

```C
char S[] = "Welcome";

for(i=0; S[i]!='\0'; i++){}
printf("Length: %d", i);
```

### Changing case

```C
// Uppercase to lower
char A[] = "WELCOME";
for(i=0, A[i]!=0; i++){
    A[i] += 32;
}
printf("%s", A);

// Toggle cases
char B[] = "wElCoMe";
for(i=0, B[i]!=0; i++){
    if(B[i]>=65 && B[i]<=90) B[i] += 32;
    else if(B[i]>=97 && B[i]<=122) B[i] -= 32;
}
printf("%s", B);
```

### Counting vowels, consonents, words

```C
int vcount=0, ccount=0, word=1;
char A[] = "How are you";
for(i=0; A[i]!='\0'; i++){
    if(A[i]=='a' ||
        A[i]=='e' ||
        A[i]=='i' ||
        A[i]=='o' ||
        A[i]=='u' ||
        A[i]=='A' ||
        A[i]=='E' ||
        A[i]=='I' ||
        A[i]=='O' ||
        A[i]=='U') vcount++;
    else if((A[i]>=65 && A[i]<=90) || (A[i]>=97 && A[i]<=122))
        ccount++;
}

for(i=0, A[i]!=0; i++){
    if(A[i]==' ' && A[i-1]) word++;
}
```

### Validate a string

```C
char *name = "Ani?321";
int valid(char *name){
    for(i=0; name[i]!='\0'; i++){
        if(!(name[i]>=65 && name[i]<=90) &&
        !(name[i]>=97 && name[i]<=122) &&
        !(name[i]>=48 && name[i]<=57)) return 0;
    } return 1;
}
```

### Reversing a string

```C
// Way 1:
int t;
char A[] = "python";
char B[7];

for(i=0; A[i]!='\0'; i++){}
i--;
for(j=0; i>=0; i--, j++){
    B[j] = A[i];
}
B[j] = '\0';

// OR

// Way 2:
for(j=0; A[j]!='\0'; j++){}
j--;
for(i=0; i<j; i++, j--){
    t = A[i];
    A[i] = A[j];
    A[j] = t;
}
```

### Comparing string and Palindrome

```C
// Comparing
char A[] = "Painter";
char B[] = "Painting";

for(i=0, j=0; (A[i]!='\0') || (B[j]!='\0'); i++, j++){
    if(A[i]>65) A[i]+32;
    else if(B[i]>65) B[i]+32;

    if(A[i] != B[j]) break;
}

if(A[i] == B[j]) printf("Equal");
else if(A[i] < B[j]) printf("Second word is greater");
else printf("First word is greater");

// Palindrome
char A[] = "madam";

for(j=0; A[j]!='\0'; j++){}
j--;
for(i=0; i<j; i++, j--){
    if(A[i] != A[j]) break;
}

if(A[i] == A[j]) printf("Palindrome");
else printf("Not palindrome");
```

### Finding duplicates in a string

```C
char A[] = "finding";

// Way 1: Compare with other letters
int count = 1;
for(i=0, j=i+1; A[j]!='\0'; i++){
    if(A[i] != 0){
        for(; A[j]!='\0'; j++){
            if (A[i] == A[j]){
                A[j] = 0;
                count++;
            }
        }
        if(count > 1){
            printf("The letter %c appears for %d times", A[i], count);
            count = 1;
        }
    }
    j = i+1;
}

// Way 2: Using hashtable as counting
int hash[26] = {0};

for(i=0; A[i]!='\0'; i++){
    hash[A[i]-97]++;
}
for(i=0; i<26; i++){
    if(hash[i]>1){
        printf("The letter %c appears for %d times", i+97, hash[i]);
    }
}

// Way 3: Using Bits
long int H = 0, x = 0, check = 0;
for(i=0; A[i]!='\0'; i++){
    x = 1;
    x = x << A[i]-97;
    if(((x & H) > 0) && ((x & check) == 0)){
        check = check | x;
        printf("%c is duplicate", A[i]);
    }else{
        H = x | H;
    }
}
// we need 26 bits for 26 letters, so the closest byte with 26 or greater is 4 byte, while some compilers store int in 4 byte and some in 2, it is safer to store it in long int to eleminate the scope of error

// here check is used for checking if the string has the duplicate letter for more than 2 times, if not checked then the code will print "duplicate" for every time it encounters the letter after the 2nd duplicate which we dont want if printed already
```

### Check for anagram

```C
// Assuming: same length

int hash[26] = {0};
char A[] = "decimal";
char B[] = "medical";

for(i=0; A[i]!=0; i++){
    hash[A[i]-97]++;
}
for(i=0; B[i]!=0; i++){
    hash[B[i]-97]--;
    if(hash[A[i]-97] < 0){
        printf("Not annagram");
        break;
    }
}
if(B[i] == '\0') printf("Annagram");
```

### Permutations of a string

```C
// Using brute force approach by backtracking on a recursive function on state space tree
void perm(char S[], int k){
    static int A[4] = {0}; // flag array
    static char ResultantString[4];

    if(S[k] == '\0'){
        ResultantString[k] == '\0';
        printf("%s", ResultantString);
    }else{
        for(i=0; S[i]!='\0'; i++){
            if(A[i] == 0){
                ResultantString[k] = S[i];
                A[i] = 1;
                perm(S, k+1);
                A[i] = 0;
            }
        }
    }
}

int main(){
    char S[] = "ABC";
    perm(S, 0);
}

// Using swaping
void perm(char S[]. int l, int h){
    if(l == h){
        printf("%s", S);
    }else{
        for(i=l; i<=h; i++){
            swap(S[l], S[i]);
            perm(S, l+1, h);
            swap(S[l], S[i]);
        }
    }
}

// l starts from 0 and h stays at the letter before null character
```

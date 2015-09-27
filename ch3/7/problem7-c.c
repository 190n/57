#include <stdio.h>

#define F2_TO_M2 0.09290304

int main() {
    int length, width, squareFeet;
    double squareMeters;
    printf("What is the length of the room in feet? ");
    scanf("%i", &length);
    printf("What is the width of the room in feet? ");
    scanf("%i", &width);
    printf("You entered dimensions of %i feet by %i feet.\n", length, width);
    squareFeet = length * width;
    squareMeters = squareFeet * F2_TO_M2;
    printf("The area is\n");
    printf("%i square feet\n", squareFeet);
    printf("%f square meters\n", squareMeters);
    return 0;
}
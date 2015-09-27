#include <iostream>

using namespace std;

#define F2_TO_M2 0.09290304

int main() {
    int length, width, squareFeet;
    double squareMeters;
    cout << "What is the length of the room in feet? ";
    cin >> length;
    cout << "What is the width of the room in feet? ";
    cin >> width;
    cout << "You entered dimensions of " << length << " feet by " << width << " feet." << endl;
    squareFeet = length * width;
    squareMeters = squareFeet * F2_TO_M2;
    cout << "The area is" << endl;
    cout << squareFeet << " square feet" << endl;
    cout << squareMeters << " square meters" << endl;
    return 0;
}
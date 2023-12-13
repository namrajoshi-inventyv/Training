//Write a program to print the following pattern without using exponential notation(x^y)
// 1! 3! 5! 7! 9! (here n = 5)
//Answer should be 1 6 120 5040 362880

#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    for (int i = 1; i <= n;i++) {
        int fact = 1;
        int j = 2*i - 1;
        while(j > 0){
            fact = fact * j;
            j--;
        }
        cout << fact << " ";
    }

    return 0;
}

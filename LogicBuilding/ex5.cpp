// Write a Program to convert rupee to paisa and paisa to rupee.

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    char c;
    double amount;

    cout << "Enter 'r' to convert rupee to paisa or 'p' to convert paisa to rupee: ";
    cin >> c;

    switch(c) {
        case 'r':
        case 'R':
            cout << "Enter the amount in rupees: ";
            cin >> amount;
            cout << "Converted amount in paisa: " << amount * 100 << " paisa" << endl;
            break;

        case 'p':
        case 'P':
            cout << "Enter the amount in paisa: ";
            cin >> amount;
            cout << "Converted amount in rupees: " << amount / 100 << " rupees" << endl;
            break;

        default:
            cout << "Invalid input. Please enter 'r' or 'p'." << endl;
            break;
    }
}
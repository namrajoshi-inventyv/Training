// Write a Program to find Area and perimeter of  rectangle.

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int l,b;
    cin >> l >> b;
    int area = l * b;
    int perimeter = 2*(l + b);
    cout << "area " << area << " " << "perimeter " << perimeter;
    return 0;
}   
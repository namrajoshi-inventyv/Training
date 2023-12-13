//Write a program to print following pattern.
//Input:- n = 4
//Output - 1  121 12321 1234321

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int r,i = 1;
    cin >> r;
    while(i <= r){
        int j = 1;
        while(j <= i){
            cout << j << " ";
            j++;
        }
        // cout << endl;
        j = i-1;
        while(j >= 1){
            cout << j << " ";
            j--;
        }
        cout << endl;
        i++;
    }
    return 0;
}       
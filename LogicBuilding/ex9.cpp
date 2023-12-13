//Write a program to print following pattern.
//Input:- n = 4
//Output:-  1 1 2 1 2 3 1 2 3 4 1 2 3 4 5

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n,i = 1;
    cin >> n;
    while(i <= n){
        int x = 1;
        while(x <= i){
            cout << x << " ";
            x++;
        }
        i++;
    }
    return 0;
}   
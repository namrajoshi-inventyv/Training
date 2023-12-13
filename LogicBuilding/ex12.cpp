//Prepare a flowchart for given input data
//input: - n = 4
//Output:- 1 232 34543 4567654

#include<bits/stdc++.h>
#define vi vector<int>
#define vii vector<vector<int>>
using namespace std;

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int rows;

    cin >> rows;

    for (int i = 1; i <= rows; ++i) {
        
        for (int j = i; j <= 2 * i - 1; ++j) {
            cout << j << " ";
        }

        for (int j = 2 * i - 2; j >= i; --j) {
            cout << j << " ";
        }

    }

    return 0;
}   
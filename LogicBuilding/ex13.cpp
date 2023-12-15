#include <iostream>
using namespace std;

int main() {
    int n;
    cin >> n;

    int fact = 1;

    for (int i = 1; i <= n; i++) {
        cout << fact << " ";

        // Update the factorial for the next iteration
        fact *= (2 * i + 1) * (2 * -i);
    }

    return 0;
}

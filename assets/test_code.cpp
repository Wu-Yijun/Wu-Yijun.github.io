#include <iostream>
#include <vector>
/***
 * @author 匿名（中文文本测试）
 * @date 2024-1-1
 ***/
using namespace std;
typedef long long LL;

#define STR1(x) "He" #x #x "o"
constexpr char kStr2[] = "world";
struct Sign {
    char sign;
    const LL nextline;
    static const bool yes = true;
    vector<int> a;
    int operator()() const { return 55 + yes; }
};
Sign s{sign : '!', nextline : '\n', a : {0b11, 0x22, 033, 44L, 55ULL}};

inline constexpr int fun() noexcept { return (1 << 2); }

int main() {
    if (kStr2[1] == 'e' && s.yes)
        printf("%s %s%c%c", STR1(l) ",", kStr2, (&s)->sign, s.nextline);
    else
        std::cout << s.a.front() << fun() << s() << endl;
    return 0;
}
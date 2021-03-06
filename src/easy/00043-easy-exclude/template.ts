type MyExclude<T, U> = T extends U ? never : T

// MyExclude<'a' | 'b' | 'c', 'a'>
// res: 'b' | 'c'

// 思路：我们要从 T 去除 T 中存在且 U 中也存在的类型，
// 就要遍历 T（联合类型） 中的每一个可选类型，然后从 U 中查找是否存在这个类型
// 若存在，则去除（返回 never）
// 若不存在，则返回 T

// 那么，如果使用 TS 实现这个逻辑呢？
// T extends U 可以实现对 T 中类型的约束，这其中的底层操作为：遍历联合类型 T 中的每一个类型，然后判断是否约束在 U 中，若存在，则返回 never（没有任何值的类型）；若不存在，则不需要排除，返回 T。

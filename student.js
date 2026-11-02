console.log("Hello JS")

console.log('\n== 1. Tinh diem trung binh ==');
function diemTrungBinh(ds) {
    if (ds.length === 0) return 0;

    return ds.reduce((tong, sv) => tong + sv.score, 0) / ds.length;
}

console.log('\n== 2. Lay danh sach ten, sap xep theo tieng Viet ==');
function layTen(ds) {
    return ds
        .map(sv => sv.name)
        .toSorted((a, b) => a.localeCompare(b, 'vi'));
}

console.log('\n== 3. Xep loai theo diem ==');
function xepLoai(diem) {
    if (diem >= 8) return 'Giỏi';
    else if (diem >= 6.5) return 'Khá';
    else if (diem >= 5) return 'Trung bình';
    return 'Yếu';
}

console.log('\n== 4. Nhom sinh vien theo lop ==');
function nhomTheoLop(ds) {
    return ds.reduce((nhom, sv) => {
        if (!nhom[sv.class]) {
            nhom[sv.class] = [];
        }

        nhom[sv.class].push(sv);

        return nhom;
    }, {});
}

console.log('\n== 5. Lấy n sinh viên điểm cao nhất ==');
function getTopStudents(ds, n) {
    return ds
        .toSorted((a, b) =>
            b.score - a.score ||
            a.name.localeCompare(b.name, 'vi')
        )
        .slice(0, n);
}

const ds = [
    { name: 'An', class: 'Web1', score: 8 },
    { name: 'Bình', class: 'Web2', score: 9 },
    { name: 'Chi', class: 'Web1', score: 6 },
    { name: 'Dũng', class: 'Web2', score: 9 },
    { name: 'Hà', class: 'Web1', score: 4 }
];

console.log('Điểm trung bình:', diemTrungBinh(ds));
console.log('Danh sách tên:', layTen(ds));
console.log('Xếp loại điểm 8:', xepLoai(8));
console.log('Nhóm theo lớp:', nhomTheoLop(ds));
console.log('Top 3 sinh viên:', getTopStudents(ds, 3));

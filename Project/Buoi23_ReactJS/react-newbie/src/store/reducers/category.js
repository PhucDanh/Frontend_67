// 1. Khai báo giá trị state reducer quản lý
const initialState = {
    categoryList: [
        { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
        { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
        { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
        { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
        { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
        // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
        { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
        { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
    ],
    selectedCategory: null
}

// 2. Khởi tạo reducer: là 1 function tiếp nhận action, chỉnh sửa state và return state mới sau khi chỉnh sửa

const reducer = (state = initialState, action) => {
    // chỉnh sửa state theo action
    return state;
}

export default reducer;
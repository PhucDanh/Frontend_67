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
    selectedCategory: "topclothes"
}

// 2. Khởi tạo reducer: là 1 function tiếp nhận action, chỉnh sửa state và return state mới sau khi chỉnh sửa

const reducer = (state = initialState, action) => {
    // chỉnh sửa state theo action
    switch(action.type) {
        case "SET_SELECTED_CATEGORY":
            state.selectedCategory = action.payload;
            return {...state};
        default:
            return {...state};
    }
}

// 3. Khi action được gửi lên Store thì rootReducer sẽ nhận và gửi tới tất cả Reducer con
// => cần set default

/**
 * Note:
 *  - Cơ chế của Redux: so sánh dữ liệu đầu vào và đầu ra => khác nhau thì mới render lại
 *  - Cơ chế so sánh: Shallow comparation (So sánh nông) => Không so sánh được object 
 *  => Dùng Spread Operator để tạo object mới (như trên)
 */

export default reducer;

const initialProduct = {
    productList: [
        // Top clothes
        {
            id: 'topcloth_1',
            type: "topclothes",
            name: "Top Cloth 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/topcloth1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/topcloth1.png',
        },
        {
            id: 'topcloth_2',
            type: "topclothes",
            name: "Top Cloth 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/topcloth2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/topcloth2.png',
        },
        {
            id: 'topcloth_3',
            type: "topclothes",
            name: "Top Cloth 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/topcloth3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/topcloth3.png',
        },
        {
            id: 'topcloth_4',
            type: "topclothes",
            name: "Top Cloth 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/topcloth4_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/topcloth4.png',
        },
        {
            id: 'topcloth_5',
            type: "topclothes",
            name: "Top Cloth 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/topcloth5_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/topcloth5.png',
        },
        {
            id: 'topcloth_6',
            type: "topclothes",
            name: "Top Cloth ",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/topcloth6_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/topcloth6.png',
        },
    
        // Both clothes
        {
            id: 'botcloth_1',
            type: "botclothes",
            name: "Bot Cloth 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/botcloth1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/botcloth1.png',
        },
        {
            id: 'botcloth_2',
            type: "botclothes",
            name: "Bot Cloth 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/botcloth2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/botcloth2.png',
        },
        {
            id: 'botcloth_3',
            type: "botclothes",
            name: "Bot Cloth 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/botcloth3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/botcloth3.png',
        },
        {
            id: 'botcloth_4',
            type: "botclothes",
            name: "Bot Cloth 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/botcloth4_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/botcloth4.png',
        },
        {
            id: 'botcloth_5',
            type: "botclothes",
            name: "Bot Cloth 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/clothes/botcloth5_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/clothes/botcloth5.png',
        },
    
        // Shoes
        {
            id: 'shoes_1',
            type: "shoes",
            name: "Shoes 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/shoes/shoes1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/shoes/shoes1.png',
        },
        {
            id: 'shoes_2',
            type: "shoes",
            name: "Shoes 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/shoes/shoes2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/shoes/shoes2.png',
        },
        {
            id: 'shoes_3',
            type: "shoes",
            name: "Shoes 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/shoes/shoes3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/shoes/shoes3.png',
        },
        {
            id: 'shoes_4',
            type: "shoes",
            name: "Shoes 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/shoes/shoes4_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/shoes/shoes4.png',
        },
        {
            id: 'shoes_5',
            type: "shoes",
            name: "Shoes 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/shoes/shoes5_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/shoes/shoes5.png',
        },
    
        // Handbags
        {
            id: 'handbag_1',
            type: "handbags",
            name: "Handbag 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/handbags/handbag1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/handbags/handbag1.png',
        },
        {
            id: 'handbag_2',
            type: "handbags",
            name: "Handbag 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/handbags/handbag2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/handbags/handbag2.png',
        },
        {
            id: 'handbag_3',
            type: "handbags",
            name: "Handbag 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/handbags/handbag3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/handbags/handbag3.png',
        },
    
        // Necklaces
        {
            id: 'necklace_1',
            type: "necklaces",
            name: "Necklace 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/necklaces/necklace1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/necklaces/necklace1.png',
        },
        {
            id: 'necklace_2',
            type: "necklaces",
            name: "Necklace 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/necklaces/necklace2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/necklaces/necklace2.png',
        },
        {
            id: 'necklace_3',
            type: "necklaces",
            name: "Necklace 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/necklaces/necklace3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/necklaces/necklace3.png',
        },
        
        // Hairstyle
        {
            id: 'hairstyle_1',
            type: "hairstyle",
            name: "Hairstyle 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/hairstyle/hairstyle1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/hairstyle/hairstyle1.png',
        },
        {
            id: 'hairstyle_2',
            type: "hairstyle",
            name: "Hairstyle 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/hairstyle/hairstyle2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/hairstyle/hairstyle2.png',
        },
        {
            id: 'hairstyle_3',
            type: "hairstyle",
            name: "Hairstyle 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/hairstyle/hairstyle3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/hairstyle/hairstyle3.png',
        },
    
        // Background
        {
            id: 'background_1',
            type: "background",
            name: "Background 1",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background1_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background1.jpg',
        },
        {
            id: 'background_2',
            type: "background",
            name: "Background 2",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background2_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background2.jpg',
        },
        {
            id: 'background_3',
            type: "background",
            name: "Background 3",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background3_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background3.jpg',
        },
        {
            id: 'background_4',
            type: "background",
            name: "Background 4",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background4_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background4.jpg',
        },
        {
            id: 'background_5',
            type: "background",
            name: "Background 5",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background5_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background5.jpg',
        },
        {
            id: 'background_6',
            type: "background",
            name: "Background 6",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background6_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background6.jpg',
        },
        {
            id: 'background_7',
            type: "background",
            name: "Background 7",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
            imgSrc_jpg: './assets/imgDressingRoom/background/background7_show.jpg',
            imgSrc_png: './assets/imgDressingRoom/background/background7.jpg',
        },
    ],
    selectedProducts: {
        // type: img
    }
}

const reducer = (state = initialProduct, action) => {
    switch(action.type) {
        case "SET_PRODUCT":
            // state.selectedProducts[action.payload.type] = action.payload.img;
            /** 
             *  - Do cơ chế Shallow Comparison => Redux không nhận ra sự thay đổi của object và mảng 
             * => không sử dụng như trên đc 
             *  - Khi dùng Spread Operation nếu key trùng nhau thì cái sau ghi đè cái trước
             */
            state.selectedProducts = {
                ...state.selectedProducts, 
                [action.payload.type]: action.payload.img
            }
            return {...state}
        default:
            return {...state}
    }
} 

export default reducer;

/**
 * 1. Component productItem, nhán nút thử => dispatch action (SET_PRODUCT)
 * 2. reducer, xây dựng cách xử lý action
 * 3. Component model, connect lên store, lấy selectedProducts xuống
 */ 
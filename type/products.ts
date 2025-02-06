

export interface Product {
    _id : string;
    productName : string;
    _type : "product";
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };
    slug : {
        _type : "slug";
        current : string ;
    };
    price : number;
    description? : string;
    inventory : number;
}
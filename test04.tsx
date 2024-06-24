/** Can you explain about Interface and Enum, and where will you be using,
please make some examples. **/
//Interface 使用情境：
// Interface在Typescript中主要用來定義物件的具體內容，當出現定義以外的內容或不符合定義的值時就會報錯，方便編譯前發現錯誤。Interface具有擴充性，也可同一個名稱的Interface重複宣告
// 案例如下：

interface Order {
  Id: number;
  Amount: number;
  MemberId: number;
  Quantity: number;
  ProductPrice: number;
}

interface OrderDiscount extends Order {
  Discount: string;
  PromotionCode: string;
}


const OrderPage = () => {

  // request api
  const res = {
    State: 'Success',
    Content: {
      OrderDetail: {
        Id: 12,
        Amount: 3000,
        MemberId: '25',
        Quantity: 3,
        ProductPrice: 1000,
      },
      HasDiscount: true,
      DiscountDetail: {
        Discount: '30%',
        PromotionCode: 'summer'
      }
    }
  };
  const { Id, Amount, MemberId, Quantity, ProductPrice } = res.Content.OrderDetail;
  const { Discount, PromotionCode } = res.Content.DiscountDetail;
  if (res.Content.HasDiscount) {

    let orderDetail: OrderDiscount = {
      Id: Id,
      Amount: Amount,
      MemberId: MemberId, // interface定義MemberId型別為number，給的值為string所以報錯
      Quantity: Quantity,
      ProductPrice: ProductPrice,
      Discount: Discount,
      PromotionCode: PromotionCode,
    };
  } else {
    let orderDetail: Order = {
      Id: Id,
      Amount: Amount,
      MemberId: 12, 
      Quantity: Quantity,
      ProductPrice: ProductPrice,
      // Discount: Discount, 使用Order interface為定義的屬性，報錯
      // PromotionCode: PromotionCode,
    };

  }

  return(<div>OrderPage</div>)

};

// Enum使用情境：
// 假設某個使用者遊戲任務需要在前端顯示成功、失敗、進行中三種狀態，而後端回傳以0表示失敗、1表示成功、2顯示進行中，前端可以透過enum方式讓程式碼更好閱讀。// 案例如下：

const TaskItem = () => {

  enum TaskStatus {
    success = 1,
    fail = 0,
    inProgress = 2
  }
  // request api
  const res = {
    State: 'Success',
    Content: {
      id: 1,
      taskStatus: 1
    }
  };
  if (res.Content.taskStatus === TaskStatus.success) {
    return (<div className="item">任務成功</div>);
  } else if (res.Content.taskStatus === TaskStatus.fail) {
    return (<>任務失敗</>);
  } else {
    return (<>任務進行中</>);
  }
};

export default TaskItem


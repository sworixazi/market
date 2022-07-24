import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemsmain',
  templateUrl: './itemsmain.component.html',
  styleUrls: ['./itemsmain.component.scss']
})
export class ItemsmainComponent implements OnInit {
  items = [ 
    {
      name: '    Slim End Table with Charging Station, Side Table with 2 USB Ports and Outlets, C-Shaped Snack Table with Cloth Bag, TV Tray Table with Metal Frame, Couch Table, for Living Room, Bedroom, Rustic Brown             ',
      price: '300',
      img: "https://t3.gstatic.com/shopping?q=tbn:ANd9GcToKeHz9vqFuuKdtyD5iJIw4kMNC-AnrQLsKAdlkHqJ4Myr4rEA65o6h-av2FDNpg4tImhVjoOyAjjRur7XUMQ6ncKV1vDzCIW7NCLZymxzAnZbdNif0iJNcQ&usqp=CAY"
  },
  {
    name: '    Slim End Table with Charging Station, Side Table with 2 USB Ports and Outlets, C-Shaped Snack Table with Cloth Bag, TV Tray Table with Metal Frame, Couch Table, for Living Room, Bedroom, Rustic Brown             ',
    price: '300',
    img: "https://t3.gstatic.com/shopping?q=tbn:ANd9GcToKeHz9vqFuuKdtyD5iJIw4kMNC-AnrQLsKAdlkHqJ4Myr4rEA65o6h-av2FDNpg4tImhVjoOyAjjRur7XUMQ6ncKV1vDzCIW7NCLZymxzAnZbdNif0iJNcQ&usqp=CAY"
},
{
  name: '    Slim End Table with Charging Station, Side Table with 2 USB Ports and Outlets, C-Shaped Snack Table with Cloth Bag, TV Tray Table with Metal Frame, Couch Table, for Living Room, Bedroom, Rustic Brown             ',
  price: '300',
  img: "https://t3.gstatic.com/shopping?q=tbn:ANd9GcToKeHz9vqFuuKdtyD5iJIw4kMNC-AnrQLsKAdlkHqJ4Myr4rEA65o6h-av2FDNpg4tImhVjoOyAjjRur7XUMQ6ncKV1vDzCIW7NCLZymxzAnZbdNif0iJNcQ&usqp=CAY"
},
{
  name: 'table',
  price: '300',
  img: "https://t3.gstatic.com/shopping?q=tbn:ANd9GcToKeHz9vqFuuKdtyD5iJIw4kMNC-AnrQLsKAdlkHqJ4Myr4rEA65o6h-av2FDNpg4tImhVjoOyAjjRur7XUMQ6ncKV1vDzCIW7NCLZymxzAnZbdNif0iJNcQ&usqp=CAY"
},
{
  name: '    Slim End Table with Charging Station, Side Table with 2 USB Ports and Outlets, C-Shaped Snack Table with Cloth Bag, TV Tray Table with Metal Frame, Couch Table, for Living Room, Bedroom, Rustic Brown             ',
  price: '300',
  img: "https://t3.gstatic.com/shopping?q=tbn:ANd9GcToKeHz9vqFuuKdtyD5iJIw4kMNC-AnrQLsKAdlkHqJ4Myr4rEA65o6h-av2FDNpg4tImhVjoOyAjjRur7XUMQ6ncKV1vDzCIW7NCLZymxzAnZbdNif0iJNcQ&usqp=CAY"
},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, input } from '@angular/core';
import { ProductItem } from '../../models';
import { derivedAsync } from 'ngxtension/derived-async';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.page.html',
  styleUrl: './product.page.scss'
})
export class ProductPage {

  baseUrl = `https://katalog.tecline.com.pl/en/`;
  product = input<ProductItem | null>();

  details = derivedAsync(() =>
    fetch(`/data/${this.product()?.url}.json`).then((r) =>
      r.json(),
    ),
  );
}

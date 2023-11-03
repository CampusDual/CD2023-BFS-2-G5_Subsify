import { Component, OnInit } from "@angular/core";
import { getMonthlyPricefunction } from "src/app/shared/shared.module";
import { Expression,FilterExpressionUtils } from "ontimize-web-ngx";

@Component({
  selector: "app-subscriptions-home",
  templateUrl: "./subscriptions-home.component.html",
  styleUrls: ["./subscriptions-home.component.css"],
})
export class SubscriptionsHomeComponent implements OnInit {
  
  public getMonthlyPrice = getMonthlyPricefunction;

  constructor() {}
  ngOnInit() {}


  createFilterCat(values: Array<{ attr; value }>): Expression {
    let filters: Array<Expression> = [];
    values.forEach(fil => {
      if (fil.value) {
        if (fil.attr === "CAT_NAME") {
          filters.push(
            FilterExpressionUtils.buildExpressionEquals(
              "CAT_NAME",
              fil.value
            )
          );
        }
      }
    });
    if (filters.length > 0) {
      return filters.reduce((exp1) =>
      FilterExpressionUtils.buildComplexExpression(
        exp1,
        null,
        FilterExpressionUtils.OP_EQUAL
      ))
      
    } else {
      return null;
    }
  }
}
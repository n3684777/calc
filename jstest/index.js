const scanf = require("scanf");
let debug = 0;
let obj = {};

Object.defineProperties(obj, {
  setMorningTotal: {
    value: function () {
      console.log(
        "monkey A / monkey B / water / box tissue / bag tissue  morningTotal"
      );
      this.moka_morningTotal = scanf("%d");
      this.mokb_morningTotal = scanf("%d");
      this.water_morningTotal = scanf("%d");
      this.boxtis_morningTotal = scanf("%d");
      this.bagtis_morningTotal = scanf("%d");
    },
  },
  setStart: {
    value: function () {
      console.log(
        "monkey A / monkey B / water / box tissue / bag tissue  (1,2,3,storage) start"
      );
      this.moka_start1 = scanf("%d");
      this.mokb_start1 = scanf("%d");
      this.water_start1 = scanf("%d");
      this.boxtis_start1 = scanf("%d");
      this.bagtis_start1 = scanf("%d");
      this.moka_start2 = scanf("%d");
      this.mokb_start2 = scanf("%d");
      this.water_start2 = scanf("%d");
      this.boxtis_start2 = scanf("%d");
      this.bagtis_start2 = scanf("%d");
      this.moka_start3 = scanf("%d");
      this.mokb_start3 = scanf("%d");
      this.water_start3 = scanf("%d");
      this.boxtis_start3 = scanf("%d");
      this.bagtis_start3 = scanf("%d");

      this.moka_storage_start = scanf("%d");
      this.mokb_storage_start = scanf("%d");
      this.water_storage_start = scanf("%d");
      this.boxtis_storage_start = scanf("%d");
      this.bagtis_storage_start = scanf("%d");
    },
  },
  setEnd: {
    value: function () {
      console.log(
        "monkey A / monkey B / water / box tissue / bag tissue  (1,2,3,storage) end"
      );
      this.moka_end1 = scanf("%d");
      this.mokb_end1 = scanf("%d");
      this.water_end1 = scanf("%d");
      this.boxtis_end1 = scanf("%d");
      this.bagtis_end1 = scanf("%d");
      this.moka_end2 = scanf("%d");
      this.mokb_end2 = scanf("%d");
      this.water_end2 = scanf("%d");
      this.boxtis_end2 = scanf("%d");
      this.bagtis_end2 = scanf("%d");
      this.moka_end3 = scanf("%d");
      this.mokb_end3 = scanf("%d");
      this.water_end3 = scanf("%d");
      this.boxtis_end3 = scanf("%d");
      this.bagtis_end3 = scanf("%d");

      this.moka_storage_end = scanf("%d");
      this.mokb_storage_end = scanf("%d");
      this.water_storage_end = scanf("%d");
      this.boxtis_storage_end = scanf("%d");
      this.bagtis_storage_end = scanf("%d");
    },
  },
  calc: {
    value: function () {
      let [
        moka_end,
        mokb_end,
        water_end,
        boxtis_end,
        bagtis_end,
        moka_start,
        mokb_start,
        water_start,
        boxtis_start,
        bagtis_start,
      ] = this.Total();
      console.log(
        `monkA endTotal = \x1b[31m${moka_end}\x1b[0m , monkA MorningTotal = \x1b[31m${this.moka_morningTotal}\x1b[0m`
      );
      if (moka_end - this.moka_morningTotal == moka_end - moka_start) {
        console.log(
          `\x1b[32m mok A amount ok!\x1b[0m , amount is \x1b[32m${
            moka_end - moka_start
          }\x1b[0m`
        );
      } else {
        console.log(
          `\x1b[31m mok A amount error\x1b[0m , in fact amount is ${
            moka_end - moka_start
          }`
        );
        if (debug) {
          console.log(`moka_end = ${moka_end}`);
          console.log(`moka_start = ${moka_start}`);
        }
      }
      console.log(
        `monkB endTotal = \x1b[31m${mokb_end}\x1b[0m , monkB MorningTotal = \x1b[31m${this.mokb_morningTotal}\x1b[0m`
      );
      if (mokb_end - this.mokb_morningTotal == mokb_end - mokb_start) {
        console.log(
          `\x1b[32m mok B amount ok!\x1b[0m , amount is \x1b[32m${
            mokb_end - mokb_start
          }\x1b[0m`
        );
      } else {
        console.log(
          `\x1b[31m mok B amount error\x1b[0m , in fact amount is ${
            mokb_end - mokb_start
          }`
        );
        if (debug) {
          console.log(`mokb_end = ${mokb_end}`);
          console.log(`mokb_start = ${mokb_start}`);
        }
      }
      console.log(
        `water endTotal = \x1b[31m${water_end}\x1b[0m , water MorningTotal = \x1b[31m${this.water_morningTotal}\x1b[0m`
      );

      if (water_end - this.water_morningTotal == water_end - water_start) {
        console.log(
          `\x1b[32m water amount ok!\x1b[0m , amount is \x1b[32m${
            water_end - water_start
          }\x1b[0m]`
        );
      } else {
        console.log(
          `\x1b[31m water amount error\x1b[0m , in fact amount is ${
            water_end - water_start
          }`
        );
        if (debug) {
          console.log(`water_end = ${water_end}`);
          console.log(`water_start = ${water_start}`);
        }
      }

      console.log(
        `box tissue endTotal = \x1b[31m${boxtis_end}\x1b[0m , box tissue MorningTotal = \x1b[31m${this.boxtis_morningTotal}\x1b[0m`
      );

      if (boxtis_end - this.boxtis_morningTotal == boxtis_end - boxtis_start) {
        console.log(
          `\x1b[32m box tissue amount ok!\x1b[0m , amount is \x1b[32m${
            boxtis_end - boxtis_start
          }\x1b[0m]`
        );
      } else {
        console.log(
          `\x1b[31m boxtis amount error\x1b[0m , in fact amount is ${
            boxtis_end - boxtis_start
          }`
        );
        if (debug) {
          console.log(`boxtis_end = ${boxtis_end}`);
          console.log(`boxtis_start = ${boxtis_start}`);
        }
      }

      console.log(
        `bag tissue endTotal = \x1b[31m${bagtis_end}\x1b[0m , bag tissue MorningTotal = \x1b[31m${this.bagtis_morningTotal}\x1b[0m`
      );

      if (bagtis_end - this.bagtis_morningTotal == bagtis_end - bagtis_start) {
        console.log(
          `\x1b[32m bag tissue amount ok!\x1b[0m , amount is \x1b[32m${
            bagtis_end - bagtis_start
          }\x1b[0m`
        );
      } else {
        console.log(
          `\x1b[31m bag tissue amount error\x1b[0m , in fact amount is ${
            bagtis_end - bagtis_start
          }`
        );
        if (debug) {
          console.log(`bagtis_end = ${bagtis_end}`);
          console.log(`bagtis_start = ${bagtis_start}`);
        }
      }
    },
  },
  Total: {
    value: function () {
      let mokA_startTotal =
        this.moka_start1 +
        this.moka_start2 +
        this.moka_start3 +
        this.moka_storage_start;
      let mokB_startTotal =
        this.mokb_start1 +
        this.mokb_start2 +
        this.mokb_start3 +
        this.mokb_storage_start;
      let water_startTotal =
        this.water_start1 +
        this.water_start2 +
        this.water_start3 +
        this.water_storage_start;
      let boxtis_startTotal =
        this.boxtis_start1 +
        this.boxtis_start2 +
        this.boxtis_start3 +
        this.boxtis_storage_start;
      let bagtis_startTotal =
        this.bagtis_start1 +
        this.bagtis_start2 +
        this.bagtis_start3 +
        this.bagtis_storage_start;

      let mokA_endTotal =
        this.moka_end1 +
        this.moka_end2 +
        this.moka_end3 +
        this.moka_storage_end;
      let mokB_endTotal =
        this.mokb_end1 +
        this.mokb_end2 +
        this.mokb_end3 +
        this.mokb_storage_end;
      let water_endTotal =
        this.water_end1 +
        this.water_end2 +
        this.water_end3 +
        this.water_storage_end;
      let boxtis_endTotal =
        this.boxtis_end1 +
        this.boxtis_end2 +
        this.boxtis_end3 +
        this.boxtis_storage_end;
      let bagtis_endTotal =
        this.bagtis_end1 +
        this.bagtis_end2 +
        this.bagtis_end3 +
        this.bagtis_storage_end;
      return [
        mokA_endTotal,
        mokB_endTotal,
        water_endTotal,
        boxtis_endTotal,
        bagtis_endTotal,
        mokA_startTotal,
        mokB_startTotal,
        water_startTotal,
        boxtis_startTotal,
        bagtis_startTotal,
      ];
    },
  },
});

/*
猴子串
猴子包
水
盒裝面
休包
*/

obj.setMorningTotal();
obj.setStart();
obj.setEnd();
//console.log(obj);
obj.calc();

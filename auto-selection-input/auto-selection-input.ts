// components/auto-selection-input.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    focus: {
      type: Boolean,
      value: false
    },
    max: {
      type: Number,
      value: -1
    },
    value: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    value: 0,
    "ss": -1,
    "se": -1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onfocus(e: any) {
      const value = this.data.value;
      const length = value >= 10 ? 2 : 1;
      this.setData({
        "ss": 0,
        "se": length
      });

      const focus = true;
      this.setData({
        focus
      });
    },
    onchange(e: any) {
      const value = e.detail.value;
      this.setData({
        focus: false,
        ss: -1,
        se: -1,
        value
      });

      // 提交change事件
      this.triggerEvent('change', { value });
    },

    max(e: any) {
      const value = parseInt(e.detail.value || '0');
      const max = this.properties.max;
      if (value > max) {
        return {
          value: max,
          cursor: 2
        }
      }

      return {
        value: value,
        cursor: 2
      }
    }
  }
})
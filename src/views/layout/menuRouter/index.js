const menuRouter = [
    {
        // 分类  组件/日志
        classificationName: '组件',
        classification: 'components',
        children: [
            {
                type: 'Basic',
                children: [
                    {
                        type: 'Input',
                        name: '输入框',
                        path: '/components/input'
                    },
                    {
                        type: 'Button',
                        name: '按钮',
                        path: '/components/button'
                    }
                ]
            },
            {
                type: 'Form',
                children: [
                    {
                        type: 'DatePicker',
                        name: '日期选择器',
                        path: '/components/datePicker'
                    },
                    {
                        type: 'Radio',
                        name: '单选框',
                        path: '/components/radio'
                    },
                    {
                        type: 'Switch',
                        name: '开关',
                        path: '/components/switch'
                    }
                ]
            },
        ]
    },
]
export function getMenuRouter() {
    return menuRouter
}
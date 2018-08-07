var ContentAreaControl = createClass({

    render: function (h) {
        return h('div', {
            class: 'content-area',
            onDrop: this.handleOnDrop,
        });
    },

    handleChange: function (element) {
        console.log('drop', element);
    }
});

var ContentAreaPreview = createClass({

});

CMS.registerWidget(
    'content-area',
    ContentAreaControl,
    ContentAreaPreview);

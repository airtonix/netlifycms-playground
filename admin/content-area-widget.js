var ContentAreaControl = createClass({

    render: function () {
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
    render: function () {
        // build a list of block display elements
        var blocks = this.props.value
            .map(function (block, index) {
                return h('div', {
                    class: 'content-area__item',
                }, block.name);
            });

        // wrap them in a container
        return h('div', {
            class: 'content-area content-area--preview'
            },
            blocks
        );
    }
});

CMS.registerWidget(
    'content-area',
    ContentAreaControl,
    ContentAreaPreview);

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
export var PlayerItem = function (_a) {
    var position = _a.position, name = _a.name, id = _a.id, defaultTeam = _a.defaultTeam;
    var _b = useDrag(function () { return ({
        type: 'player',
        item: { id: id, defaultTeam: defaultTeam, name: name, position: position },
        options: { dropEffect: 'move' },
        collect: function (monitor) { return ({
            isDragging: !!monitor.isDragging()
        }); }
    }); }), drag = _b[1];
    return React.createElement(ListItem, { ref: drag }, "".concat(position, " ").concat(name));
};
var ListItem = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: white;\n    padding: 0.25rem;\n"], ["\n    color: white;\n    padding: 0.25rem;\n"])));
var templateObject_1;

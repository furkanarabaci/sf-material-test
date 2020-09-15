import Page1Design from 'generated/pages/page1';
import componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
import PageTitleLayout  from "components/PageTitleLayout";
import System = require("sf-core/device/system");
import FlMaterialTextBox from "@smartface/materialtextbox";
import FlexLayout = require('sf-core/ui/flexlayout');
import Color = require('sf-core/ui/color');

export default class Page1 extends Page1Design {
    router: any;
	constructor () {
        super();
        this.onShow = onShow.bind(this, this.onShow.bind(this));
		this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    }
    initMaterialTextBox() {
        const singleLine = new FlMaterialTextBox();
        const multiLine = new FlMaterialTextBox();
        const heightWidth = new FlMaterialTextBox();
        const heightWidthMultiline = new FlMaterialTextBox();
        const rightLayout = new FlMaterialTextBox();
        const rightLayoutSecond = new FlMaterialTextBox();
        this.scrollView1.layout.addChild(singleLine, "singleLine", ".materialTextBox-wrapper");
        this.scrollView1.layout.addChild(multiLine, "multiLine", ".materialTextBox-wrapper");
        this.scrollView1.layout.addChild(heightWidth, "heightWidth", ".materialTextBox-wrapper");
        this.scrollView1.layout.addChild(heightWidthMultiline, "heightWidthMultiline", ".materialTextBox-wrapper");
        this.scrollView1.layout.addChild(rightLayout, "rightLayout", ".materialTextBox-wrapper");
        this.scrollView1.layout.addChild(rightLayoutSecond, "rightLayoutSecond", ".materialTextBox-wrapper");
        singleLine.options = { 
            hint: "singleLine",
            backgroundColor: Color.BLUE
        };
        multiLine.options = {
            hint: "multiLine",
            multiline: true,
            lineCount: 3,
            backgroundColor: Color.MAGENTA
        }
        heightWidth.options = {
            hint: "heightWidth",
            width: 400,
            height: 150,
            backgroundColor: Color.GREEN
        }
        heightWidthMultiline.options = {
            hint: "width&height&multiline",
            multiline: true,
            lineCount: 4,
            width: 400,
            height: 150,
            backgroundColor: Color.YELLOW
        }
        rightLayout.options = {
            hint: "rightLayout",
            multiline: true,
            lineCount: 4,
            width: 400,
            height: 150,
            backgroundColor: Color.RED
        }
        rightLayoutSecond.options = {
            hint: "rightLayout",
            multiline: true,
            lineCount: 4,
            width: 400,
            height: 150,
            backgroundColor: Color.DARKGRAY
        }
        rightLayout.materialTextBox.rightLayout = {
            view: new FlexLayout({
                backgroundColor: Color.BLACK,
                height: 80,
                width: 100
            }),
            width: 100,
            height: 80
        }
        rightLayoutSecond.materialTextBox.rightLayout = {
            view: new FlexLayout({
                backgroundColor: Color.BLACK,
                height: 80,
                width: 100
            }),
            width: 100,
            height: 80
        }
        this.layout.applyLayout();
    }
}

function onShow(superOnShow) {
  superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    this.initMaterialTextBox();
}

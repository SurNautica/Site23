const style = `.tag {
    color: #ffffff;
    line-height: .8rem;
    padding: 5px;
    margin-left: 7px !important;
    margin: 0 !important; 
    background-clip: padding-box;
    border-radius: 20px;
    display: inline-block;
    font-size: .7rem;
    font-family: "Rubik";
    font-weight: normal;
    border: 2px solid;
}
.read-only {
    border-color: rgb(42, 157, 143);
    color: rgb(42, 157, 143);
}
.client-only {
    border-color: rgb(82, 199, 95);
    color: rgb(82, 199, 95);
}
.server-only {
    border-color: rgb(57, 118, 204);
    color: rgb(57, 118, 204);
}
.unstable {
    border-color: rgb(204, 134, 80);
    color: rgb(204, 134, 80);
}
.yields {
    border-color: rgb(186, 172, 22);
    color: rgb(186, 172, 22);
}
.experimental {
    border-color: rgb(173, 58, 199);
    color: rgb(173, 58, 199);
}
.deprecated {
    border-color: rgb(227, 87, 75);
    color: rgb(227, 87, 85);
}
.script {
    border-color: rgb(57, 118, 204);
    color: rgb(57, 118, 204);
}
.local-script {
    border-color: rgb(82, 199, 95);
    color: rgb(82, 199, 95);
}
.sc0 {
    border-color: rgb(218, 201, 201);
    color: rgb(218, 201, 201);
}
.sc1 {
    border-color: rgb(139, 229, 227);
    color: rgb(139, 229, 227);
}
.sc2 {
    border-color: rgb(29, 107, 187);
    color: rgb(29, 107, 187);
}
.sc3 {
    border-color: rgb(192, 56, 0);
    color: rgb(192, 56, 0);
}
.dd {
    border-color: rgb(165, 10, 10);
    color: rgb(165, 10, 10);
}
h4 {
    display: inline;
}`

var replaceStuff = [
	["{read-only}", '<p class="tag read-only">Read-Only</p>'],
    ["{server-only}", '<p class="tag server-only">Server-Only</p>'],
	["{client-only}", '<p class="tag client-only">Client-only</p>'],
	["{deprecated}", '<p class="tag deprecated">Deprecated</p>'],
    ["{unstable}", '<p class="tag unstable">Unstable</p>'],
    ["{experimental}", '<p class="tag experimental">Experimental</p>'],
    ["{yields}", '<p class="tag yields">Yields</p>'],
    ["{script}", '<p class="tag script">Script</p>'],
    ["{local-script}", '<p class="tag local-script">LocalScript</p>'],
    ["{sc0}", '<p class="tag sc0">Security Clearance 0</p>'],
    ["{sc1}", '<p class="tag sc1">Security Clearance 1</p>'],
    ["{sc2}", '<p class="tag sc2">Security Clearance 2</p>'],
    ["{sc3}", '<p class="tag sc3">Security Clearance 3</p>'],
    ["{dd}", '<p class="tag dd">Department Director</p>'],
];

function replace(element, from, to) {
	if (element.childNodes.length) {
		element.childNodes.forEach(child => replace(child, from, to));
	} else {
		const cont = element.textContent;
		if (cont && cont.includes(from)) {
			var newElement = document.createElement("p");
			element.parentNode.replaceWith(newElement);
			newElement.outerHTML = to;
		}
	}
};

for (var i = 0; i < replaceStuff.length; i++) {
	replace(document.body, replaceStuff[i][0], replaceStuff[i][1]);
}

const styleElement = document.createElement("style")
styleElement.innerHTML = style

document.head.appendChild(styleElement)
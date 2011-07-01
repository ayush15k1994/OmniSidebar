var omnisidebarOptions = {
	init: function() {
		window.removeEventListener("load", omnisidebarOptions.init, false);
		
		omnisidebarOptions.keysets = [
			Application.prefs.get('extensions.omnisidebar.keysets.0'),
			Application.prefs.get('extensions.omnisidebar.keysets.1'),
			Application.prefs.get('extensions.omnisidebar.keysets.2'),
			Application.prefs.get('extensions.omnisidebar.keysets.3'),
			Application.prefs.get('extensions.omnisidebar.keysets.4'),
			Application.prefs.get('extensions.omnisidebar.keysets.5'),
			Application.prefs.get('extensions.omnisidebar.keysets.6')
		];
		
		for(var i=0; i<omnisidebarOptions.keysets.length; i++) {
			if(!omnisidebarOptions.keysets[i].value) {
				document.getElementById('keysetItem'+i).setAttribute('hidden', 'true');
			}
		}
		
		omnisidebarOptions.toggleTwin();
		omnisidebarOptions.toggleTitle();
		omnisidebarOptions.toggleTitleTwin();
		omnisidebarOptions.toggleAbove();
	},
	
	toggleTwin: function() {
		var twin = document.getElementById('twinCheckbox').checked;
		var nodes = document.getElementsByClassName('toggleTwin');
		for(var i=0; i<nodes.length; i++) {
			if(twin) {
				if(nodes[i].id != 'titleButtonTwinCheckbox' || !document.getElementById('hideTitleTwinCheckbox').checked) {
					nodes[i].removeAttribute('disabled');
				}
			} else {
				nodes[i].setAttribute('disabled', 'true');
			}
		}
		omnisidebarOptions.toggleAboveTwin();
	},
	
	toggleTitle: function() {
		if(document.getElementById('hideTitleCheckbox').checked) {
			document.getElementById('titleButtonCheckbox').setAttribute('disabled', 'true');
		} else {
			document.getElementById('titleButtonCheckbox').removeAttribute('disabled');
		}
	},
	
	toggleTitleTwin: function() {
		if(document.getElementById('hideTitleTwinCheckbox').checked) {
			document.getElementById('titleButtonTwinCheckbox').setAttribute('disabled', 'true');
		} else {
			document.getElementById('titleButtonTwinCheckbox').removeAttribute('disabled');
		}
	},
	
	toggleAbove: function() {
		var checked = document.getElementById('aboveCheckbox').checked;
		var els = document.getElementsByClassName('aboveCheckbox');
		for(var i=0; i<els.length; i++) {
			if(checked) {
				els[i].removeAttribute('disabled');
			} else {
				els[i].setAttribute('disabled', 'true');
			}
		}
	},
	
	toggleAboveTwin: function() {
		var enable = (document.getElementById('twinCheckbox').checked && document.getElementById('aboveTwinCheckbox').checked);
		var els = document.getElementsByClassName('aboveTwinCheckbox');
		for(var i=0; i<els.length; i++) {
			if(enable) {
				els[i].removeAttribute('disabled');
			} else {
				els[i].setAttribute('disabled', 'true');
			}
		}
	}
}

window.addEventListener("load", omnisidebarOptions.init, false);
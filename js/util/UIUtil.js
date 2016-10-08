import _ from 'underscore'

let UIUtil = ({
	buildClassName (classNames...) {
		for (curClassName in classNames) {
			if (_.isEmpty(curClassName)) {
				continue;
			} 
			if (className) {
				className += " " + curClassName
			} 
			else className = curClassName 
		}

		return className
	}
		

	classSet (classMap) {
		classes = []
		for(className, hasClass of classMap)
			classes.push(className) if hasClass
		@buildClassName(classes...)
	}
		
})

export default UIUtil
	
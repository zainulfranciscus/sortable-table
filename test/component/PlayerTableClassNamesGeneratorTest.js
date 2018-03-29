import {
	PLAYER_ROW,
	MEDIUM_4_COLUMN_CLASSES,
	MEDIUM_3_COLUMN_CLASSES,
	RATING_COLUMN_CLASSES,
	GRADIENT_CLASS,
	playerDataColumnClasses,
	medium4Columns,
	medium3Columns,
	headerClassNames,
	ratingHeaderClassNames,
	medium3Header,
	medium4Header,
	applyGradientOn2ndRows
} from "../../src/component/PlayerTableClassNamesGenerator";

describe('PlayerTableClassNamesGenerator ', () => {
        
    
    it('should return ' + playerDataColumnClasses(MEDIUM_4_COLUMN_CLASSES) + ' classes for player table' , () => {
          
        expect(medium4Columns()).toBe(playerDataColumnClasses(MEDIUM_4_COLUMN_CLASSES));        
    });

    it('should return ' + playerDataColumnClasses(MEDIUM_3_COLUMN_CLASSES) + ' classes for player table' , () => {
          
        expect(medium3Columns()).toBe(playerDataColumnClasses(MEDIUM_3_COLUMN_CLASSES));        
    });

    it('should return ' + headerClassNames(RATING_COLUMN_CLASSES) + ' classes for player table rating header', () => {
    	expect(ratingHeaderClassNames()).toBe(headerClassNames(RATING_COLUMN_CLASSES));        

    });

    it('should return ' + headerClassNames(MEDIUM_3_COLUMN_CLASSES) + ' classes for player table player headers', () => {
		expect(medium3Header()).toBe(headerClassNames(MEDIUM_3_COLUMN_CLASSES));
    })

    it('should return ' + headerClassNames(MEDIUM_4_COLUMN_CLASSES) + ' classes for player table player headers', () => {
		expect(medium4Header()).toBe(headerClassNames(MEDIUM_4_COLUMN_CLASSES));
    })

    it('should return ' + GRADIENT_CLASS + ' for odd number row in a player table', () => {
		expect(applyGradientOn2ndRows(3)).toBe( " " + GRADIENT_CLASS);
		expect(applyGradientOn2ndRows(2)).toBe("");
    })
});
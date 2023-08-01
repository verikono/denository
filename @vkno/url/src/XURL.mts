export class XURL extends URL {

    public static async open( spec: string ): Promise<XURL> {

        return new XURL( spec );
    }
}

export default URL;

if( import.meta.vitest ) {

    const {
        describe,
        it,
        expect
    } = import.meta.vitest;

    


}

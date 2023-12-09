import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://feqosmhgbbpofepfjrol.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const saveGardenToDb = async (garden) => {
    const { data, error } = await supabase
    .from('southside garden')
    .insert([ garden ])
    if(error) console.log(error)
    else {
        console.log('Garden saved successfully ', data)
    }
}

export { saveGardenToDb }
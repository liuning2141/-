const state = {
    count:'',
    fid:''
}
const mutations = {
    upfid( state,fid){
        state.fid = fid
    }
}
const actions = {
    upfid(context,fid){
        context.fid = fid
    }
}
export default {
    state,
    mutations,
    actions
}
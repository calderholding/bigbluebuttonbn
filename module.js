/**
 * @package   mod_bigbluebuttonbn
 * @author    Jesus Federico  (jesus [at] blindsidenetworks [dt] com)
 * @copyright 2012-2014 Blindside Networks Inc.
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v2 or later
 */
M.mod_bigbluebuttonbn = M.mod_bigbluebuttonbn || {};

/**
 * This function is initialized from PHP
 * 
 * @param {Object}
 *            Y YUI instance
 */

M.mod_bigbluebuttonbn.init_view = function(Y) {
    if (bigbluebuttonbn.joining == 'true') {
        var dataSource = new Y.DataSource.Get({
            source : M.cfg.wwwroot + "/mod/bigbluebuttonbn/bbb_broker.php?"
        });

        var request = {
            request : "action=ping&id=" + bigbluebuttonbn.meetingid + "&bigbluebuttonbn=" + bigbluebuttonbn.bigbluebuttonbnid,
            callback : {
                success : function(e) {
                    if (e.data.status == 'true') {
                        M.mod_bigbluebuttonbn.join();
                    }
                },
                failure : function(e) {
                    console.debug(e.error.message);
                }
            }
        };

        var id = dataSource.setInterval(bigbluebuttonbn.ping_interval, request);
    }
};

M.mod_bigbluebuttonbn.join = function() {
    location.reload();
};

M.mod_bigbluebuttonbn.viewend_CloseWindow = function() {
    window.close();
};

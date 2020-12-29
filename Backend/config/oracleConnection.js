const oracledb = require('oracledb');

credentials = {
    user: "root",
    password: "root",
    connectString: "35.222.44.61:1521/ORCL18"
}

try {
    oracledb.initOracleClient({libDir: ''});
} catch (err) {
    console.error('No se puede conectar al cliente!');
}

async function Open(query, binds, autoCommit) {

    let connection = await oracledb.getConnection(credentials);
    let result = await connection.execute(query, binds, { autoCommit });
    connection.release();
    return result;
}

exports.Open = Open;